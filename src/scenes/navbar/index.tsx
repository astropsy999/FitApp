import { useState } from "react";
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-0 w-full`}>Navbar</div>
    </nav>
  );
};

export default Navbar;
