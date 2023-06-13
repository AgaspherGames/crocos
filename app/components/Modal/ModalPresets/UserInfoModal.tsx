import React, { LegacyRef, RefObject, useRef } from "react";
import Modal from "../Modal";
import Button from "../../Button/Button";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import ModalLabel from "../ModalLabel/ModalLabel";
import ModalInput from "../ModalInput/ModalInput";
import ModalForm from "../ModalForm/ModalForm";
import { useForm } from "react-hook-form";
import ModalInputPhone from "../ModalInput/ModalInputPhone";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

  function onSubmit(data: any) {
    console.log(data);

    // onSubmitForm({ phone, city, name, email });
  }

  const schema = yup
    .object({
      name: yup.string().required(),
      city: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const onSubmit = data => console.log(data);

  console.log(errors.name)

  return (
    <Modal opened={opened} setOpened={setOpened}>
      <div className="consultation-modal">
        <p className="modal-title">{title}</p>
        <p className="modal-subtitle">{subTitle}</p>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <ModalForm>
            <ModalLabel htmlFor="name"> Ваше имя </ModalLabel>
            <ModalInput
              register={register}
              label="name"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              // id="name"
              type="text"
            />
            <p>{errors.name?.message&&'Введите верное имя'}</p>
            <ModalLabel htmlFor="city">Город</ModalLabel>
            <ModalInput
              register={register}
              label="city"
              // id="city"
              type="text"
            />
            <p>{errors.city?.message&&'Введите верный город'}</p>
            <ModalLabel htmlFor="phone">Ваш телефон</ModalLabel>
            <ModalInputPhone
              // inputRef={phoneInput as RefObject<HTMLInputElement>}
              // onChange={onPhoneNumber}
              // value={phone}
              register={register}
              label="phone"
              // id="phone"
              type="text"
            />
            <p>{errors.phone?.message&&'Введите верный номер телефон'}</p>
            <ModalLabel htmlFor="email">Ваш email</ModalLabel>
            <ModalInput
              register={register}
              label="email"
              // id="email"
              type="text"
            />
            <p>{errors.email?.message&&'Введите верную почту'}</p>
              <Button onClick={e => { e.preventDefault() }}>
              Отправить заявку <ArrowCircleIcon className="arrow-icon" />
            </Button>
          </ModalForm>
        </form>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
