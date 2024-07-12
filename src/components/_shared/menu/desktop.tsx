import Link from "next/link";
import React from "react";
import { data } from "./data";

export const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex gap-3">
      {data.map((item) => (
        <li key={item.name}>
          <Link href="{item.url}" title={item.name}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
