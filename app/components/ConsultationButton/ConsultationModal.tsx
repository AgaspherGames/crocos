import React, { LegacyRef, RefObject, useRef } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import ModalLabel from "../Modal/ModalLabel/ModalLabel";
import ModalInput from "../Modal/ModalInput/ModalInput";
import ModalForm from "../Modal/ModalForm/ModalForm";
import UserInfoModal from "../Modal/ModalPresets/UserInfoModal";
interface ConsultationModalProps {
  opened: boolean;
  setOpened: Function;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  opened,
  setOpened,
}) => {
  return <UserInfoModal opened={opened} setOpened={setOpened} onSubmitForm={(data) => {	console.log(data);
   }} title="Заказать консультацию"  />
};

export default ConsultationModal;
