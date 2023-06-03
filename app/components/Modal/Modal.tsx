"use client";
import CrossIcon from "@/app/icons/CrossIcon";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  setOpened: Function;
}

const Modal: React.FC<ModalProps> = ({ children, opened, setOpened }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal-root");
    setMounted(true);
  }, []);
  if (!(mounted && ref.current)) return <div></div>;
  return createPortal(
    <div
      onClick={() => {
        setOpened(false);
      }}
      className={`modal ${opened ? "open" : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="content">
        {children}
        <CrossIcon onClick={() => {	setOpened(false) }} className="modal-cross" />
      </div>
    </div>,
    ref.current
  );
};

export default Modal;
