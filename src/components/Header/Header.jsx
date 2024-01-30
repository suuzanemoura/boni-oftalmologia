"use client";

import { useState } from "react";
import DialogNavBar from "../Dialog/DialogNavbar";
import NavBar from "../Navbar/Navbar";
import NavBarMobile from "../Navbar/NavbarMobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-[#011c36] from-0% via-[#0e2c50] via-[10%] to-[#011e3a] lg:bg-transparent lg:from-transparent lg:via-transparent lg:to-transparent z-50 mb-8 lg:mb-0 lg:static">
      <NavBar />
      <NavBarMobile setMobileMenuOpen={setMobileMenuOpen} />
      <DialogNavBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
