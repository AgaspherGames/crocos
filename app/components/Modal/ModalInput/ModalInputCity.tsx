import { useCities } from "@/app/hooks/handbookHooks";
import React, { Ref, useEffect, useState } from "react";
import {
  Control,
  Controller
} from "react-hook-form";
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

  const cities = useCities();
  const [cityList, setCityList] =
    useState<{ value: string; label: string }[]>();  

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
                // menu: () => "modal-select",
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
                indicatorSeparator: () =>( {	
                  display: "none"
                 })
              }}
              options={cityList}
              value={cityList.find((c) => c.value === value)}
              onChange={(val) => onChange(val?.value)}
            />
          )}
        ></Controller>
      )}
    </>
  );
};

export default ModalInputCity;
