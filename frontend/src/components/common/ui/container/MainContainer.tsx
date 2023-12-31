import React from "react";

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex h-full w-screen overflow-x-hidden px-6 pt-20 scrollbar-hide  md:px-20  md:pt-48">
      <section className="relative z-20 h-full w-screen ">{children}</section>
    </main>
  );
}
