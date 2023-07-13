"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";


function ShopLogo() {
  return (
    <Avatar>
      <AvatarImage src="/logo.svg" height={36} width={36} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default ShopLogo;
