import { useEffect, useState } from "react";
import { DonationForm, Footer, Header, InfoBlock } from "../index";
import s from "./DonationBlock.module.css";

export const DonationBlock = (): JSX.Element => {
  const [tab, setTab] = useState<string>("monthly");
  const [amount, setAmount] = useState<number>(tab === "monthly" ? 12 : 40);

  useEffect(() => {
    setAmount(tab === "monthly" ? 12 : 40);
  }, [tab]);

  return (
    <>
      <Header tab={tab} setTab={setTab} />
      <div className={s.wrapper}>
        <DonationForm tab={tab} setAmount={setAmount} amount={amount} />
        <InfoBlock amount={amount} tab={tab} />
        <Footer tab={tab} setTab={setTab} />
      </div>
    </>
  );
};
