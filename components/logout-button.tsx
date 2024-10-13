"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

function LogoutButton() {
  //   const handleClick = async () => {
  //     await signOut();
  //   };
  return <Button onClick={() => signOut({ callbackUrl: "/sign-in" })}>Cerrar Sesión</Button>;
}

export default LogoutButton;
 