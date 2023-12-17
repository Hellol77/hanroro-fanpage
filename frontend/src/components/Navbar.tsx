"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { Menu } from "./menu/Menu";
import { usePathname } from "next/navigation";
import { NAVIGATION_TITLE } from "@/constants/navigation";
import MainLogoIcon from "./common/icon/MainLogoIcon";
import { isLoginContext } from "@/contexts/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const isLogin = useContext(isLoginContext);
  return (
    <div
      className={`mr-2 flex w-screen items-center ${
        pathname === "/video" || "/" ? "bg-transparent" : "bg-[#101010]"
      } px-6 md:w-screen md:px-20 md:pt-4`}
    >
      <Link href={"/"} className="mr-8">
        <MainLogoIcon className="h-20 w-20" textColor="black" bgColor="white" />
      </Link>
      <ul className=" hidden h-20 w-full items-center  gap-8 text-sm font-extrabold md:flex">
        {NAVIGATION_TITLE.map(({ title }) => (
          <li key={title}>
            <Link href={`/${title.toLowerCase()}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link className=" justify-end" href={isLogin ? "/profile" : "/login"}>
        {isLogin ? "profile" : "Login"}
      </Link>
      <Menu />
    </div>
  );
}
