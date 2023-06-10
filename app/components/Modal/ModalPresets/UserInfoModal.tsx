import React, { LegacyRef, RefObject, useRef } from "react";
import Modal from "../Modal";
import Button from "../../Button/Button";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import ModalLabel from "../ModalLabel/ModalLabel";
import ModalInput from "../ModalInput/ModalInput";
import ModalForm from "../ModalForm/ModalForm";
interface UserInfoModalProps {
  opened: boolean;
  setOpened: Function;
  onSubmitForm: (data: {
    phone: string;
    city: string;
    name: string;
    email: string;
  }) => void;
  title?: string;
  subTitle?: string;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  opened,
  setOpened,
  onSubmitForm,
  title = "Онлайн заявка",
  subTitle = "Оставте заявку и мы с вами свяжемся",
}) => {
  const phoneInput = useRef<LegacyRef<HTMLInputElement>>();
  const [phone, setPhone] = React.useState("+7 (___) ___ __ __");
  const [city, setCity] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  function onPhoneNumber(e: React.ChangeEvent<HTMLInputElement>) {
    let new_value = e.target.value.replace(/[ ()_]/g, "").replace(/\+7/g, "");
    const arr = ["+7 ", ...new_value.split("")];
    arr.length > 1 && arr.splice(1, 0, "(");
    arr.length > 5 && arr.splice(5, 0, ") ");
    arr.length > 9 && arr.splice(9, 0, " ");
    arr.length > 12 && arr.splice(12, 0, " ");
    new_value = maxLength(arr.join(""), 18);
    setPhone(new_value);
  }

  function maxLength(string: string, len: number) {
    return string.slice(0, len);
  }

  function onSubmit() {
    onSubmitForm({phone, city, name, email});
  }

  return (
    <Modal opened={opened} setOpened={setOpened}>
      <div className="consultation-modal">
        <p className="modal-title">{title}</p>
        <p className="modal-subtitle">{subTitle}</p>
        <ModalForm>
          <ModalLabel htmlFor="name"> Ваше имя </ModalLabel>
          <ModalInput
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            type="text"
          />
          <ModalLabel htmlFor="city">Город</ModalLabel>
          <ModalInput
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            id="city"
            type="text"
          />
          <ModalLabel htmlFor="phone">Ваш телефон</ModalLabel>
          <ModalInput
            inputRef={phoneInput as RefObject<HTMLInputElement>}
            onChange={onPhoneNumber}
            value={phone}
            id="phone"
            type="text"
          />
          <ModalLabel htmlFor="email">Ваш email</ModalLabel>
          <ModalInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            type="text"
          />
          <Button onClick={onSubmit}>
            Отправить заявку <ArrowCircleIcon className="arrow-icon" />{" "}
          </Button>
        </ModalForm>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
