import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UpdateModel } from "../../core/_models";
import {
  DatePicker,
  TranslatedInputNumber,
  TranslatedInputText,
} from "../../../../components";

interface Props {
  collection: string;
  readOnly?: boolean;
}

export const EditForm: FC<Props> = ({ collection, readOnly = false }) => {
  const {
    formState: { errors },
    control,
  } = useFormContext<UpdateModel>();

  return (
    <>
      <Controller
        name="voucher_code"
        control={control}
        rules={{
          required: {
            value: true,
            message: "voucher_code is required",
          },
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TranslatedInputText
            collection={collection}
            errorMessage={errors.voucher_code}
            fieldName="voucher_code"
            name="voucher_code"
            isRequired={true}
            value={value}
            onChange={(value: string) => {
              onChange(value);
            }}
            placeholder="Enter voucher code"
          />
        )}
      />
      <Controller
        name="discount_percent"
        control={control}
        rules={{
          required: {
            value: false,
            message: "discount_percent is required",
          },
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TranslatedInputNumber
            collection={collection}
            errorMessage={errors.discount_percent}
            fieldName="discount_percent"
            name="discount_percent"
            isRequired={false}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            placeholder="enter discount_percent"
          />
        )}
      />
      <Controller
        name="expiry_date"
        control={control}
        rules={{
          required: {
            value: true,
            message: "expiry_date of Birth is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            isRequired
            label="tanggal kadaluarsa"
            value={value || ""}
            errorsMessage={errors.expiry_date}
            options={{
              altInput: true,
              altFormat: "j F, Y",
              dateFormat: "Y-m-d",
            }}
            onChange={(date) => {
              onChange(date);
            }}
          />
        )}
      />
    </>
  );
};
