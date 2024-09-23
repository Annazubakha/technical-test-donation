import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { DonationAmountList, Icon } from "../index";
import s from "./DonationForm.module.css";

interface FormProps {
  tab: string;
  amount: number;
  setAmount: (amount: number) => void;
}

export type Inputs = {
  amount: number;
};

const schema = yup.object({
  amount: yup
    .number()
    .typeError("Amount must be a number.")
    .min(1, "Amount must be at least 1.")
    .required("Amount are required."),
});

export const DonationForm: React.FC<FormProps> = ({
  tab,
  amount,
  setAmount,
}): JSX.Element => {
  useEffect(() => {
    setAmount(amount);
  }, [amount, setAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
    if (isChecked) {
      return;
    }
  };

  const handleCheckboxChange = (value: number) => {
    setAmount(value);
    setValue("amount", value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onSubmit: SubmitHandler<Inputs> = async (data): Promise<void> => {
    console.log(data);
    try {
      await console.log(data);
      toast.success("Donation was made successfully.");
      reset();
    } catch {
      toast.error("Something went wrong. Please, try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h1 className={s.title}>
        I would like to make a {tab === "monthly" ? "monthly" : "one-off"}{" "}
        donation of
      </h1>
      <div className={s.inside_wrapper}>
        <DonationAmountList
          tab={tab}
          setAmount={handleCheckboxChange}
          setIsChecked={setIsChecked}
          amount={amount}
          register={register}
        />
        <div className={s.input_wrapper}>
          <label>
            <input
              type="number"
              className={s.user_amount}
              placeholder="Other amount"
              {...register("amount")}
              onChange={handleInputChange}
            />
          </label>
          <span className={s.icon}>&pound; </span>
          <p className={s.input_error}>{errors.amount?.message}</p>
        </div>
        <button type="submit" className={s.btn_submit}>
          Donate &pound;
          {amount ? amount : 0} {tab === "monthly" ? "monthly" : "today"}{" "}
          <Icon id="lock" size={18} />{" "}
        </button>
      </div>
    </form>
  );
};
