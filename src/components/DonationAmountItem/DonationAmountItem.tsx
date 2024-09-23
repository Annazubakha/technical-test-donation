import { UseFormRegister } from "react-hook-form";
import { Icon, Inputs } from "../index";
import s from "./DonationAmountItem.module.css";

interface AmountItemProps {
  amount: number;
  setAmount: (amount: number) => void;
  isChecked: boolean;
  setIsChecked: (arg: boolean) => void;
  register: UseFormRegister<Inputs>;
}

export const DonationAmountItem: React.FC<AmountItemProps> = ({
  setAmount,
  amount,
  isChecked,
  setIsChecked,
  register,
}): JSX.Element => {
  const handleChange = () => {
    setIsChecked(true);
    setAmount(amount);
  };
  return (
    <li className={`${s.item} ${isChecked ? s.checked : ""}`}>
      <label>
        <input
          type="radio"
          {...register("amount")}
          value={amount}
          checked={isChecked}
          onChange={handleChange}
          className={s.checkbox_hidden}
        />
        &pound;
        {amount}{" "}
        {isChecked ? (
          <div className={s.icon_wrapper}>
            <Icon id="check" size={12} className={s.icon_check} />
          </div>
        ) : (
          ""
        )}
      </label>
    </li>
  );
};
