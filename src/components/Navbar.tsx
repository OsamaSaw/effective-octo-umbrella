import React, { useState } from "react";
import Link from "next/link";
import { MenuItem, SubMenu } from "@szhsin/react-menu";
import { data } from "@/utils/MenuData";
import { CustomMenu } from "./CustomMenu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { RecurringSubItem } from "./RecurringSubItem";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <span className="text-white cursor-pointer">Logo</span>
            </Link>
          </div>
          <div className="flex flex-row space-x-5">
            {data.map((navItem, index) => {
              return (
                <CustomMenu
                  link={navItem.link}
                  key={navItem.name + index}
                  name={navItem.name}
                >
                  {navItem.sub.length && (
                    <RecurringSubItem index={index} navItem={navItem} />
                  )}
                </CustomMenu>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
