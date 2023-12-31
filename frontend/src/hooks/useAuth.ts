import { useContext } from "react";
import {
  IsLoginContext,
  LogoutContext,
  SetUserDataContext,
  UserDataContext,
} from "@/contexts/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import {
  loginApi,
  logoutApi,
  refreshAccessTokenApi,
  validateAccessTokenApi,
} from "@/apis/auth";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function useAuth() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const search = searchParams.get("code");
  const router = useRouter();
  const isLogin = useContext(IsLoginContext);
  const setUserData = useContext(SetUserDataContext);
  const userData = useContext(UserDataContext);
  const handleLogout = useContext(LogoutContext);

  const login = async () => {
    if (search === null) {
      toast.error("유효하지 않은 로그인 코드입니다.");
      return;
    }
    try {
      const userData = await loginApi(search);
      if (setUserData) {
        setUserData(userData);
      }
      queryClient.clear();
    } catch (err) {
      console.log("Login Failed", err);
    } finally {
      router.push("/");
    }
  };

  const logout = async () => {
    if (handleLogout && userData) {
      try {
        const accessToken = userData.accessToken;
        const { userId } = userData.user;

        if (accessToken && userId) {
          await logoutApi(accessToken, userId);
        }
      } catch (err) {
        console.log("Logout failed", err);
      } finally {
        handleLogout();
        toast("로그아웃 되었습니다.", {});
        queryClient.clear();
        router.push("/");
      }
    }
  };

  // access token 갱신, 만약 유효하지 않거나 refresh token을 통해 재발급, refresh
  const validateLogin = async () => {
    if (!userData) return false;

    const accessToken = userData.accessToken;
    const { userId } = userData.user;

    if (!userId || !accessToken) {
      handleLogout();
      return false;
    }

    try {
      const tokenInfo = await validateAccessTokenApi(accessToken);

      if (tokenInfo.accessToken !== undefined && setUserData) {
        setUserData((prev) =>
          prev ? { ...prev, accessToken: tokenInfo.accessToken } : prev,
        );
      }

      return userId === tokenInfo.userId;
    } catch (err) {
      const userData = await refreshAccessTokenApi("kakao");

      if (setUserData) {
        console.log("401 refresh token");
        setUserData(userData);
        return true;
      }

      handleLogout();
      return false;
    }
  };

  return { isLogin, login, logout, validateLogin };
}
