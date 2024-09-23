import { UseFormRegister } from "react-hook-form";
import monthlyAmount from "../../data/amountMonthly.json";
import onceAmount from "../../data/onceAmount.json";
import { DonationAmountItem, Inputs } from "../index";
import s from "./DonationAmountList.module.css";

interface AmountListProps {
  tab: string;
  setAmount: (amount: number) => void;
  setIsChecked: (checked: boolean) => void;
  amount: number;
  register: UseFormRegister<Inputs>;
}

export interface AmountItem {
  id: string;
  amount: number;
}
export const DonationAmountList: React.FC<AmountListProps> = ({
  tab,
  setAmount,
  setIsChecked,
  amount,
  register,
}): JSX.Element => {
  const list = tab === "monthly" ? monthlyAmount : onceAmount;

  return (
    <ul className={s.list}>
      {list.map((item: AmountItem) => (
        <DonationAmountItem
          key={item.id}
          amount={item.amount}
          setAmount={setAmount}
          isChecked={item.amount === amount}
          setIsChecked={setIsChecked}
          register={register}
        />
      ))}
    </ul>
  );
};
