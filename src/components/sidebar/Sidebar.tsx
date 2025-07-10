"use client";

import { useState } from "react";
import SidebarItems from "./Sidebaritem";

const Sidebar = () => {
  const [selectedItemId, setSelectedItemId] = useState("dashboard");

  return (
    <aside className="select-none px-3 py-4 min-h-screen bg-white  border-gray- flex flex-col justify-start items-center text-black shadow-md">
      <SidebarItems selectedItemId={selectedItemId} onSelect={setSelectedItemId} />
    </aside>
  );
};

export default Sidebar;
