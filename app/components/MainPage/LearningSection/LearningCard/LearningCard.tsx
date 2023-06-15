import Image from "next/image";
import React from "react";
import Button from "@/app/components/Button/Button";
import CourseBadge from "../CourseBadge/CourseBadge";
import UserInfoModal from "@/app/components/Modal/ModalPresets/UserInfoModal";
export interface LearningCardProps {
  imgUrl: string;
  text: string;
  offline?: boolean;
}

const LearningCard: React.FC<LearningCardProps> = ({
  imgUrl,
  text,
  offline = false,
}) => {
  const [modalOpened, setModalOpened] = React.useState(false);
  
  return (
    <div className="card">
      <div className="card-top">
        <Image
          width={338}
          height={331}
          alt="learning image"
          src={imgUrl}
        />
      </div>
      <CourseBadge offline={offline} />
      <div className="card-bottom">
        <p className="info">{text}</p>
        <Button
        onClick={() => {	setModalOpened(true) }}
        >Подать заявку</Button>
      </div>
      <UserInfoModal opened={modalOpened}  setOpened={setModalOpened} onSubmitForm={() => {	 }} title="Онлайн заявка" />
    </div>
  );
};

export default LearningCard;
