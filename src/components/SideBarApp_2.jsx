import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
// import { PiForkKnife } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";

const SideBarApp = () => {
  const [open, setOpen] = useState(true);
  const [submenuItemOpen, setSubmenuItemOpen] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuItemOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icons: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icons: <BsFillImageFill /> },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Project" },
        { title: "Project" },
        { title: "Project" },
      ],
      icons: <BsReverseLayoutTextSidebarReverse />,
    },
    { title: "Analytics", icons: <AiOutlineBarChart /> },
    { title: "Inbox", icons: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icons: <BsPerson /> },
    { title: "Setting", icons: <AiOutlineSetting /> },
    { title: "Logout", icons: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen duration-300 ${
          open ? "w-72" : "w-20"
        } 
        hidden md:block md:w-20 lg:w-72 p-5 pt-8`}
      >
        <div className="inline-flex">
          <GiKnifeFork
            className={`bg-amber-300 text-3xl rounded 
            cursor-pointer duration-500 block float-left 
            ${open && "rotate-[360deg]"} mr-2 text-dark-purple`}
          />
          <h1
            className={`text-white font-medium 
          text-2xl origin-left duration-300 md:hidden lg:block
           uppercase tracking-widest`}
          >
            Afrie Dishes
          </h1>
        </div>

        <div
          className={`bg-light-white  mt-6 py-2 rounded-md 
            flex items-center ${!open ? "px-2.5" : "px-4"} md:px-2.5 lg:px-4`}
        >
          <BsSearch
            className={`text-white text-lg block 
          float-left cursor-pointer ${open && "mr-2"} md:mr-0 lg:mr-2`}
          />

          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full 
            focus:outline-none text-white 
            ${!open && "hidden"} md:hidden lg:block`}
          />
        </div>

        <ul className=" pt-2">
          {Menus.map((menu, index) => (
            <div key={index} className=" relative group">
              <li
                className={`flex items-center text-gray-300 
                text-sm gap-x-4 cursor-pointer p-2 ${
                  menu.spacing ? "mt-9" : "mt-2"
                } hover:bg-light-white rounded-md`}
              >
                <span className="text-2xl block float-left">
                  {menu.icons ? menu.icons : <RiDashboardFill />}
                </span>

                <span
                  className={`text-base font-medium duration-200 flex-1 ${
                    !open && "hidden"
                  } md:hidden lg:block`}
                >
                  {menu.title}
                </span>

                {menu.submenu && open && (
                  <BiChevronDown
                    className={`${submenuItemOpen[index] && "rotate-180"}`}
                    onClick={() => toggleSubmenu(index)}
                  />
                )}

                <span
                  className="absolute left-10 bg-dark-purple
                 text-white rounded-md px-2 py-1 hidden 
                 group-hover:block md:hidden md:text-base 
                 md:font-medium lg:hidden"
                >
                  {menu.title}
                </span>
              </li>

              {menu.submenu && submenuItemOpen[index] && open && (
                <ul className=" pl-8 absolute bg-dark-purple left-0 w-full z-10 md:hidden lg:block">
                  {menu.submenuItems.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className=" text-gray-300 text-sm flex 
                      items-center gap-x-4 cursor-pointer p-2 px-5
                       hover:bg-light-white rounded-md"
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarApp;
