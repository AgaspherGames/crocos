import { useCities } from "@/app/hooks/handbookHooks";
import { useStore } from "@/app/hooks/store";
import React, { Ref, useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import InputMask from "react-input-mask";
import Select from "react-select";

interface ModalInputCityProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  inputRef?: Ref<HTMLInputElement>;
  label: string;
  control: Control<{
    name: string;
    city: string;
    phone: string;
    email: string;
  }>;
}

const ModalInputCity: React.FC<ModalInputCityProps> = ({
  className,
  label,
  inputRef,
  control,
  ...props
}) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const cities = useCities();
  const [cityList, setCityList] =
    useState<{ value: string; label: string }[]>();

  const storeCities = useStore(state=>state.cities)
  useEffect(() => {	
    console.log(storeCities);
   }, [storeCities])
  

  useEffect(() => {
    setCityList(
      cities.map((el) => ({
        value: el.id + "",
        label: el.title,
      }))
    );
  }, [cities]);


  return (
    <>
      {cityList && (
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              classNames={{
                control: () => `modal-input ${className}`,
                menu: () => "modal-select",
              }}
              styles={{
                menu: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }),
                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  padding: "0",
                  display: "flex",
                }),
                input: (baseStyles) => ({
                  ...baseStyles,
                  padding: '0',
                  margin: '0'
                }),
              }}
              options={cityList}
              value={options.find((c) => c.value === value)}
              onChange={(val) => onChange(val?.value)}
            />
          )}
        ></Controller>
      )}
    </>
  );
};

export default ModalInputCity;
