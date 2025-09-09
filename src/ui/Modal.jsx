import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] h-screen w-full bg-black/30 backdrop-blur-sm transition-all duration-500">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 px-9 py-7 shadow-lg transition-all duration-500 sm:px-16 sm:py-12"
      >
        <button
          onClick={close}
          className="absolute top-3 right-4 cursor-pointer rounded-md p-1 transition-colors duration-200 hover:bg-gray-100"
        >
          <MdOutlineClose className="h-9 w-9 text-gray-500" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
