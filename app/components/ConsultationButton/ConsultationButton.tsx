import PhoneCallIcon from "@/app/icons/PhoneCallIcon";
import React from "react";
interface ConsultationButtonProps {}

const ConsultationButton: React.FC<ConsultationButtonProps> = () => {
  return (
    <div className="consultation-button">
      <div className="btn">
        <PhoneCallIcon />
        <p>Заказать консультацию</p>
      </div>
    </div>
  );
};

export default ConsultationButton;
