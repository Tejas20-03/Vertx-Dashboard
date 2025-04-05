import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Sidebar = () => {
  // Mock user data for the sidebar
  const users = [
    { id: 1, name: "User 1", image: "/avatar/1.png", isOnline: true },
  ];

  return (
    <div className="w-[50px] bg-black text-white border-r border-gray-700 h-screen flex flex-col">
      <div className="flex flex-col items-center py-4 flex-grow">
        <div className="mb-6">
          <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
            <img src="/logo.svg" alt="Logo" className="w-[15px] h-[15px]" />
          </div>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="mb-4 p-2 rounded-full cursor-pointer relative"
            title={user.name}
          >
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full overflow-hidden">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            {user.isOnline && (
              <div className="absolute bottom-2 right-2 w-[8px] h-[8px] bg-[#01754F] rounded-full border-[1px] border-black"></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-0  border-t border-gray-700">
        <div className="cursor-pointer" title="Add New">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <AiOutlinePlus className="text-gray-400 text-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
