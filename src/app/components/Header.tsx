'use client'

import React from "react";
import Navbar from "./Navbar";

const navLinks = [{
  label: "Home",
  href: "/"
},{
  label: "Blog",
  href: "/blog"
},{
  label: "About",
  href: "/about"
}]




export default function Header() {

  return (
    <header className='container'>
      <div className="header-wrapper">
        <Navbar navLinks={navLinks}/>
      </div>
    </header>
  );
}
