"use client";

import "./Menu.css";
import { motion } from "motion/react";
import Button from "../Button/Button";
import { MenuIcon } from "lucide-react";
const Menu = () => {
  return (
    <div className="fixed nav w-full  left-0 right-0 z-10">
      <div className="flex items-center w-full">
        <div className="flex flex-1 justify-start px-4">
          <motion.span
            whileHover={{ scale: 0.95 }}
            onTap={{ scale: 0.95 }}
            className="flex items-center w-14 h-14 cursor-pointer rounded-full justify-center bg-accent"
          >
            <MenuIcon />
          </motion.span>
        </div>

        <div className="flex flex-1 justify-center mix-blend-difference">
          <h1 className="text-[3rem]  text-dark-200">PARIS BY EMILY</h1>
        </div>

        <div className="flex flex-1 justify-end px-4">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Menu;
