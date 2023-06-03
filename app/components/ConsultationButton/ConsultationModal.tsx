import React, { LegacyRef, RefObject, useRef } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
interface ConsultationModalProps {
  opened: boolean;
  setOpened: Function;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  opened,
  setOpened,
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

    // arr[14] ||= "_";
    // arr[13] ||= "_";
    // arr[12] ||= " ";
    // arr[11] ||= "_";
    // arr[10] ||= "_";
    // arr[9] ||= " ";
    // arr[8] ||= "_";
    // arr[7] ||= "_";
    // arr[6] ||= "_";
    // arr[5] ||= ")";
    // arr[4] ||= "_";
    // arr[3] ||= "_";
    // arr[2] ||= "_";
    // arr[1] ||= "(";
    new_value = maxLength(arr.join(""), 18);
    setPhone(new_value);
    // if (phoneInput?.current != null) {
    //   const input = phoneInput.current;
    //   input!.selectionStart = 1;
    //   input!.selectionEnd = 2;
    // }
  }

  function maxLength(string: string, len: number) {
    return string.slice(0, len);
  }

  return (
    <Modal opened={opened} setOpened={setOpened}>
      <div className="consultation-modal">
        <p className="modal-title">Онлайн заявка</p>
        <p className="modal-subtitle">Оставте заявку и мы с вами свяжемся</p>
        <div className="modal-form">
          <label htmlFor="name" className="modal-label">
            Ваше имя
          </label>
          <input value={name} onChange={(e) => { setName(e.target.value) }} id="name" type="text" className="modal-input" />
          <label htmlFor="city" className="modal-label">
            Город
          </label>
          <input value={city} onChange={(e) => { setCity(e.target.value) }} id="city" type="text" className="modal-input" />
          <label htmlFor="phone" className="modal-label">
            Ваш телефон
          </label>
          <input
            ref={phoneInput as RefObject<HTMLInputElement>}
            onChange={onPhoneNumber}
            value={phone}
            id="phone"
            type="text"
            className="modal-input"
          />
          <label htmlFor="email" className="modal-label">
            Ваш email
          </label>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" type="text" className="modal-input" />
          <Button>Отправить заявку <ArrowCircleIcon className="arrow-icon" /> </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConsultationModal;
