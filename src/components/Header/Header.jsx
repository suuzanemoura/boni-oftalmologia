"use client";

import { useState } from "react";
import DialogNavBar from "./DialogNavBar";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" z-50">
      <NavBar />
      <NavBarMobile setMobileMenuOpen={setMobileMenuOpen} />
      <DialogNavBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
