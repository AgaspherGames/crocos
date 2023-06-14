import React, { LegacyRef, RefObject, useRef, useState } from "react";
import Modal from "../Modal";
import Button from "../../Button/Button";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import ModalLabel from "../ModalLabel/ModalLabel";
import ModalInput from "../ModalInput/ModalInput";
import ModalForm from "../ModalForm/ModalForm";
import { Controller, useForm } from "react-hook-form";
import ModalInputPhone from "../ModalInput/ModalInputPhone";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ModalInputCity from "../ModalInput/ModalInputCity";
import CitySelect from "../../Header/CitySelect/CitySelect";
import { useCities } from "@/app/hooks/handbookHooks";
import { ICity, ICityItem } from "@/app/types/interfaces";

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
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log('rerender');
  
  // const onSubmit = data => console.log(data);

  return (
    <Modal opened={opened} setOpened={setOpened}>
      <div className="consultation-modal">
        <p className="modal-title">{title}</p>
        <p className="modal-subtitle">{subTitle}</p>
        <form onSubmit={handleSubmit(onSubmit)} >
          <ModalForm>
            <ModalLabel htmlFor="name"> Ваше имя </ModalLabel>
            <ModalInput
              register={register('name')}
              label="name"
              type="text"
            />
            <p>{errors.name?.message && "Введите верное имя"}</p>
            <ModalLabel htmlFor="city">Город</ModalLabel>
            <ModalInputCity
              control={control}
              label="city"
            />
            <p>{errors.city?.message && "Введите верный город"}</p>

            <ModalLabel htmlFor="phone">Ваш телефон</ModalLabel>
            <ModalInputPhone
              register={register('phone')}
              
              label="phone"
              type="text"
            />
            <p>{errors.phone?.message && "Введите верный номер телефон"}</p>
            <ModalLabel htmlFor="email">Ваш email</ModalLabel>
            <ModalInput
              register={register('email')}
              label="email"
              type="text"
            />
            <p>{errors.email?.message && "Введите верную почту"}</p>
            <Button
              onClick={(e) => {
                // e.preventDefault();
              }}
              type="submit"
            >
              Отправить заявку <ArrowCircleIcon className="arrow-icon" />
            </Button>
          </ModalForm>
        </form>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
