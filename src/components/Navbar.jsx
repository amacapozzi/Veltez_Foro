import { useNavigate } from "react-router-dom";
import { ModalCreateToken } from "./modalCreateToken";
import { useState } from "react";
import { tokenCreate } from "../utilities/tokenCreate";
import { useAdmins } from "../hooks/useAdmins";
import { Avatar, Tag } from "@chakra-ui/react";

export const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [createToken, setCreateToken] = useState(false);
  const { succes } = tokenCreate();
  const { esperando, admins } = useAdmins();

  if (esperando) return <div></div>;

  const handleHome = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleOpenNav = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("left-0");
  };

  return (
    <main className="bg-blue-600 font-medium">
      <span
        class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={handleOpenNav}
      >
        <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen"
      >
        <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center rounded-md ">
            <i class="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
            <h1 class="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              Veltez - {user}
            </h1>
            <i class="bi bi-x ml-20 cursor-pointer lg:hidden"></i>
          </div>
          <hr class="my-2 text-gray-600" />
          <div>
            <div
              class="p-2.5 mt-3 flex items-center rounded-md 
        px-4 duration-300 cursor-pointer  bg-gray-700"
            >
              <i class="bi bi-search text-sm"></i>
              <input
                class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                placeholder="Serach"
              />
            </div>

            <div onClick={handleHome} class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i class="bi bi-house-door-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">
                Home
              </span>
            </div>
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i class="bi bi-person-lines-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">
                Tokens
              </span>
            </div>
            <div  onClick={() => setCreateToken(true)} class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i class="bi bi-plus-circle"></i>
              <span
                class="text-[15px] ml-4 text-gray-200"
              >
                Create token
              </span>
            </div>
            {createToken && (
                <ModalCreateToken onClose={() => setCreateToken(false)} />
              )}
            <hr class="my-4 text-gray-600" />
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i class="bi bi-envelope-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Messages</span>
            </div>
            {admins.map((admin) => {
              return (
                <div
                  key={admin.id}
                  class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600"
                >
                  <Avatar size="sm" name={admin.name} />
                  <div class="flex justify-between w-full items-center">
                    <span class="text-[15px] ml-4 text-gray-200">
                      <Tag colorScheme="blue">
                        {admin.name} [{admin.rol}]
                      </Tag>
                    </span>
                  </div>
                </div>
              );
            })}
            <div
              class=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto font-medium "
              id="submenu"
            ></div>
            <div onClick={handleLogout} class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i class="bi bi-box-arrow-in-right"></i>
              <span
                class="text-[15px] ml-4 text-gray-200"
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
