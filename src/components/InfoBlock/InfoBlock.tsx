import s from "./InfoBlock.module.css";

interface Props {
  amount: number;
  tab: string;
}

export const InfoBlock: React.FC<Props> = ({ amount, tab }): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <p
        className={`${s.info_description} ${
          tab === "monthly" ? s.montly_desc : s.once_desc
        }`}
      >
        &pound;
        {amount ? amount : 0}{" "}
        {tab === "monthly" ? (
          <>
            {" "}
            Could help answer an emergency call to our Animal Rescue{" "}
            <span className={s.additional_descr1}>Line</span>
            <span className={s.additional_descr}>
              {" "}
              more text if your need it.
            </span>{" "}
          </>
        ) : (
          <>
            Could help an Animal Rescue Team take on an urgent animal rescue{" "}
            <span className={s.additional_descr}>
              {" "}
              more text if your need it.
            </span>
          </>
        )}
      </p>
    </div>
  );
};
