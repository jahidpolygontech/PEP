import React from "react";

export default function LoggedInLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
