import React from "react"
import Link from 'next/link'

const MainHeader = () => {
    return (
        <div className="bg-blue-500">
            Main Header
            <ul>
              <Link href="/">
                <li>home</li>
              </Link>
              <Link href="/category">
                <li>Category</li>
              </Link>
              <Link href="/product">
                <li>product</li>
              </Link>
            </ul>
        </div>
    );
}

export default MainHeader;