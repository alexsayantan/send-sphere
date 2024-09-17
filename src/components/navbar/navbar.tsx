import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  to: string;
  isActive: boolean;
  isDisabled?: boolean;
}

interface NavBarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavBarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <nav className="flex justify-between items-center px-5 pt-5 pb-2 absolute top-0 w-full">
        <div>
          <h2 className="text-xl">Send Sphere</h2>
        </div>
        <div className="hidden md:flex gap-x-6">
          <MenuItems items={items} />
        </div>
        <IoMenu
          size={24}
          className="block md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>

      {isOpen && (
        <nav className="absolute right-5 flex flex-col gap-y-2 min-w-24 border px-5 py-2 rounded-md md:hidden">
          <MenuItems items={items} />
        </nav>
      )}
    </>
  );
};

const MenuItems: React.FC<NavBarProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <NavLink
          key={index}
          className={`inline-flex items-center gap-x-2 text-lg whitespace-nowrap ${
            item.isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          to={item.to}
          aria-current={item.isActive ? "page" : undefined}
          style={({ isActive }) => {
            return isActive ? { color: "blue" } : {};
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;
