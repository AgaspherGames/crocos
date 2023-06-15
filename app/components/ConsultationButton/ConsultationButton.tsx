import PhoneCallIcon from "@/app/icons/PhoneCallIcon";
import React from "react";
import ConsultationModal from "./ConsultationModal";
interface ConsultationButtonProps {}

const ConsultationButton: React.FC<ConsultationButtonProps> = () => {
  const [modalOpened, setModalOpened] = React.useState(false);
  
  return (
    <div className="consultation-button">
      <div onClick={() => {	setModalOpened(true) }} className="btn">
        <PhoneCallIcon />
        <p>Заказать консультацию</p>
      </div>
      <ConsultationModal opened={modalOpened} setOpened={setModalOpened} />
    </div>
  );
};

export default ConsultationButton;
