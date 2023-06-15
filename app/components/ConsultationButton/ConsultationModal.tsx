import React from "react";
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
