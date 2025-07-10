"use client";

import Image from "next/image";

interface SidebarItem {
  id: string;
  icon: string;
  alt: string;
  label: string;
  isLogout?: boolean;
}

interface SidebarItemsProps {
  selectedItemId: string;
  onSelect: (id: string) => void;
}

const sidebarItems: SidebarItem[] = [
  { id: "dashboard", icon: "/Images/dashboard/3dcube.svg", alt: "Dashboard", label: "Dashboard" },
  { id: "create-shipment", icon: "/Images/dashboard/add-square.svg", alt: "Create Shipment", label: "Create Shipment" },
  { id: "batch-shipping", icon: "/Images/dashboard/3square.svg", alt: "Batch Shipping", label: "Batch Shipping" },
  { id: "address-book", icon: "/Images/dashboard/location.svg", alt: "Address Book", label: "Address Book" },
  { id: "settings", icon: "/Images/dashboard/setting-2.svg", alt: "Settings", label: "Settings" },
  { id: "help", icon: "/Images/dashboard/info-circle.svg", alt: "Help", label: "Help" },
  { id: "logout", icon: "/Images/dashboard/logout.svg", alt: "Logout", label: "Logout", isLogout: true },
];

const SidebarItems = ({ selectedItemId, onSelect }: SidebarItemsProps) => {
  const handleClick = (item: SidebarItem) => {
    if (item.isLogout) {
      //  Add logout logic here
      console.log("Logging out...");
    }
    onSelect(item.id);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {sidebarItems.map((item, index) => {
        const isActive = item.id === selectedItemId;
        const showDivider = item.isLogout && index !== 0;

        return (
          <div key={item.id} className="w-full">
            {showDivider && <div className="w-60 my-4 border-t border-gray-100 mx-auto" />}
            <div
              onClick={() => handleClick(item)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors
                ${isActive ? "bg-secondary text-primary" : "text-black hover:bg-gray-100"}`}
            >
              <Image src={item.icon} alt={item.alt} width={28} height={28} />
              <span>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarItems;
