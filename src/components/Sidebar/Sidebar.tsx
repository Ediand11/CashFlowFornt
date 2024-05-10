"use client";

import { Button, Drawer } from "@mui/material";
import { useState } from "react";

interface SidebarProps {}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>Teeest</Button>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <p>test</p>
      </Drawer>
    </>
  );
};

export default Sidebar;
