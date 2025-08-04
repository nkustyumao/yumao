import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <header className="w-full h-16 bg-gray-800 text-white flex justify-between items-center px-10 font-bold">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">YUMAO</Link>
          </li>
          <li>
            <Link href="https://github.com/nkustyumao/" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
