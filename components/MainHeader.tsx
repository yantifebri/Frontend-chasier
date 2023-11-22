"use client";
import React, { useContext } from "react";
// import Link from 'next/link';
import {FaBars} from  "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";


const MainHeader = () => {
 const {toggle} = useContext(MenuContext);

    return (
        <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
          <div>Yanti Febriyanti</div>
          <div onClick={toggle}>
            <FaBars className="cursor-pointer"/>
          </div>
        </div>
    );
}

export default MainHeader;
  {/* <ul>
              <Link href="/">
                <li>home</li>
              </Link>
              <Link href="/category">
                <li>Category</li>
              </Link>
              <Link href="/product">
                <li>product</li>
              </Link>
            </ul> */}