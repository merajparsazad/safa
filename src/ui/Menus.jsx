import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { LuEllipsisVertical } from "react-icons/lu";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x - 20,
      y: rect.y + rect.height + 8 + window.scrollY,
    });

    openId === id ? close() : open(id);
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-3 cursor-pointer rounded-sm border-none bg-none p-1.5 transition-colors duration-200 hover:bg-gray-100"
    >
      <LuEllipsisVertical className="h-7 w-7 text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      style={{ top: position?.y, right: position?.x }}
      ref={ref}
      className="absolute overflow-hidden rounded-xl bg-white shadow-xl"
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full cursor-pointer items-center gap-4 border-none bg-none px-8 py-3 text-start text-xl text-nowrap transition-colors duration-200 hover:bg-gray-50"
      >
        {icon}
        <span className="text-base">{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
