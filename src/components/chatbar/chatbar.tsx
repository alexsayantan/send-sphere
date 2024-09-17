import { LuMessageSquarePlus, LuMoreVertical } from "react-icons/lu";

const Chatbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-x-2 items-center">
        <img
          className="w-10 h-10 rounded"
          src="https://cdn.dribbble.com/users/1192372/avatars/normal/1649e3b6c38f4c8ce85d5157ee888c56.png?1620835344"
          alt="Default avatar"
        />
        <p className="font-medium text-lg">Alex Caprico</p>
      </div>
      <div className="flex gap-x-4">
        <button
          className="cursor-pointer hover:scale-110"
        >
          <LuMessageSquarePlus size={24} />
        </button>
        <button className="cursor-pointer hover:scale-110">
          <LuMoreVertical size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chatbar;
