"use client";

import { useState } from "react";
import DialogNavBar from "../Dialog/DialogNavbar";
import NavBar from "../Navbar/Navbar";
import NavBarMobile from "../Navbar/NavbarMobile";

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
