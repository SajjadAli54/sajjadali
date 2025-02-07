"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import Image from "next/image";

import Logo from "./logo.png";

const NavBar = () => {
  const currentPath = usePathname();
  
  const routes = {
    home: "/",
    experience: "/experience",
    projects: "/projects",
    education: "/education",
    blogs: "/blogs",
    contact: "/contact",
  };
  
  const links = [
    { href: routes.home, label: "Home" },
    { href: routes.education, label: "Education" },
    { href: routes.experience, label: "Experience" },
    { href: routes.projects, label: "Projects" },
    { href: routes.blogs, label: "Blogs" },
    { href: routes.contact, label: "Contact" },
  ];
  
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <Image src={Logo} alt="Profile" width={50} height={50} />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            key={`${href}${label}`}
            className={classNames({
              "hover:text-zinc-700 transition-colors": true,
              "text-zinc-500": currentPath !== href,
              "text-zinc-900": currentPath === href,
            })}
            href={href as string}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
