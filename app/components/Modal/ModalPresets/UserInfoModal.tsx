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
      name: yup.string().required().min(2),
      city: yup.string().required(),
      phone: yup.string().required().length(18),
      email: yup.string().required().email(),
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

  // const onSubmit = data => console.log(data);

  return (
    <Modal opened={opened} setOpened={setOpened}>
      <div className="consultation-modal">
        <p className="modal-title">{title}</p>
        <p className="modal-subtitle">{subTitle}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalForm>
            <ModalLabel
              error={errors.city?.message && "Введите верное имя"}
              htmlFor="name"
            >
              {" "}
              Ваше имя{" "}
            </ModalLabel>
            <ModalInput register={register("name")} label="name" type="text" />
            <ModalLabel
              error={errors.city?.message && "Введите верный город"}
              htmlFor="city"
            >
              Город
            </ModalLabel>
            <ModalInputCity control={control} label="city" />

            <ModalLabel
              error={errors.phone?.message && "Введите верный номер телефона"}
              htmlFor="phone"
            >
              Ваш телефон
            </ModalLabel>
            <ModalInputPhone
              register={register("phone")}
              label="phone"
              type="text"
            />
            <ModalLabel
              error={errors.email?.message && "Введите верную почту"}
              htmlFor="email"
            >
              Ваш email
            </ModalLabel>
            <ModalInput
              register={register("email")}
              label="email"
              type="text"
            />
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
