import { LuMoreVertical, LuHeart, LuVideo } from "react-icons/lu";

const Chathead = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <div className="flex gap-x-2 items-start">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.dribbble.com/users/1192372/avatars/normal/1649e3b6c38f4c8ce85d5157ee888c56.png?1620835344"
          alt="Default avatar"
        />
        <div className="mt-1 ml-2">
          <p className="font-medium text-lg">Alex Caprico</p>
          <div className="flex justify-between">
            <p className="text-xs">Online</p>
            <div className="flex items-center gap-x-2">
              <button className="cursor-pointer hover:scale-110">
                <LuVideo size={17} />
              </button>
              <button className="cursor-pointer hover:scale-110">
                <LuHeart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="cursor-pointer hover:scale-110">
          <LuMoreVertical size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chathead;
