"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaBookOpen, FaHome, FaHotel } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineDataUsage } from "react-icons/md";
import {
  Sidebar as ReactProSidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { Architects_Daughter } from "next/font/google";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  // State to keep track of the currently selected item
  const [selectedItem, setSelectedItem] = useState("/admin/dashboard");
  useEffect(() => {
    setSelectedItem(pathname);
  }, [pathname]);
  const menuItems = [
    { label: "لوحة التحكم", icon: <FaHome />, link: "/admin/dashboard" },
    {
      label: "الرحلات",
      icon: <BiSolidCategory />,
      link: "/admin/trips",
    },
    {
      label: "الفنادق",
      icon: <FaHotel />,
      link: "/admin/hotels",
    },
    { label: "الحجوزات", icon: <FaBookOpen />, link: "/admin/bookings" },
    {
      label: "جمع البيانات",
      icon: <MdOutlineDataUsage />,
      link: "/admin/scrape-data",
    },
  ];

  const handleItemClick = (link: string) => {
    // Update the selected item when a menu item is clicked
    setSelectedItem(link);
    router.push(link);
  };

  return (
    <div className=" fixed top-10 right-3  rounded-lg   h-[85%]  overflow-hidden    scrollbar-hide ">
      <ReactProSidebar
        className="  overflow-hidden rounded-lg border-black shadow-lg shadow-black   scrollbar-hide"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          },
        }}
      >
        <Menu
          className="h-[100vh] max-h-[100vh] text-black overflow-hidden rounded-lg"
          menuItemStyles={{
            button: ({ level, active }) => {
              const backgroundColor = level === 0 ? "#ffffff" : "#ffffff";

              return {
                backgroundColor: active ? "#b7791f" : backgroundColor,
                color: active ? "#ffffff" : "#000000",
                "&:hover": {
                  backgroundColor: active ? "#b7791f" : "#b7791f",
                  color: active ? "#ffffff" : "#ffffff",
                },
              };
            },
          }}
        >
          <div className="flex items-center justify-center my-10 flex-col">
            <Image
              src="/logo.png"
              alt="logo"
              height={150}
              width={150}
              className="cursor-pointer"
              onClick={() => router.push("/admin/dashboard")}
            />
            <span className="text-3xl uppercase font-medium  mr-5">
              <span className={ArchitectsDaughter.className}>DIGISTACKS BOOKING</span>
            </span>
          </div>

          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem
                onClick={() => handleItemClick(item.link)}
                icon={item.icon}
                active={selectedItem === item.link}
              >
                {item.label}
              </MenuItem>
            </React.Fragment>
          ))}
          {/* <MenuItem
            onClick={() => handleItemClick("/admin/logout")}
            icon={<LuLogOut />}
            active={selectedItem === "/admin/logout"}
          >
            Logout
          </MenuItem> */}
        </Menu>
      </ReactProSidebar>
    </div>
  );
};

export default Sidebar;
