import { useContext } from "react";
import { UserDataContext } from "@/contexts/AuthContext";
import { getProfileInfo } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/apis/querykeys";

export function useGetProfile() {
  const { accessToken } = useContext(UserDataContext);

  return useQuery({
    queryKey: [queryKeys.getProfile],
    queryFn: async () => {
      const data = await getProfileInfo(accessToken);
      return data;
    },
    enabled: !!accessToken,
  });
}
