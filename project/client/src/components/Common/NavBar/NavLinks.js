"use client"
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";



function NavLinks() {
  
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
   {
      title: "Highlights",
      path: "/highlights",
    },
    
   
   
  ];

  return (
    <>
      {links.map((el, index) => (
        <React.Fragment key={index}>
          {(el.isDropdown) ?
            <Dropdown data={el} />
            :
            <li className="m-1 transition duration-300 ease-in-out transform hover:scale-110">
              {el.authDependent && authUser && authUser?.isAdmin ?
                <Link href={el.Altpath} className="font-bold text-white hover:underline px-2 bg-transparent">{el.Alttitle}</Link> :
                <Link href={el.path} className="font-bold text-white hover:underline px-2 bg-transparent">{el.title}</Link>
              }
            </li >
          }
        </React.Fragment>
      ))}
    </>

  )
}

export default NavLinks