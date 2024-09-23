import Img1 from "../../assets/images/direct-debit-1-logo-png-transparent.png";
import Img2 from "../../assets/images/fundraising-regulator-logo.png";
import Img3 from "../../assets/images/visa-logo.png";
import Img4 from "../../assets/images/mastercard-logo.png";
import Img5 from "../../assets/images/paypal-logo.png";

import s from "./Foooter.module.css";

interface FooterProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ tab, setTab }): JSX.Element => {
  return (
    <footer className={s.footer}>
      {tab === "monthly" ? (
        <div className={s.monthly_wrapper}>
          <ul className={s.logo_list}>
            <li>
              <img src={Img1} alt="Logo" />
            </li>
            <li>
              <img src={Img2} alt="Logo" />
            </li>
          </ul>
          <p className={s.description}>
            All Direct Debits are protected by the
            <br /> Direct Debit Guarantee.
          </p>
          <button
            type="button"
            className={s.btn_other_tab}
            onClick={() => setTab("once")}
          >
            I would like to make a one-off donation
          </button>
        </div>
      ) : (
        <div className={s.monthly_wrapper}>
          <ul className={s.logo_list}>
            <li>
              <img src={Img3} alt="Logo" />
            </li>
            <li>
              <img src={Img4} alt="Logo" />
            </li>
            <li>
              <img src={Img5} alt="Logo" />
            </li>
            <li>
              <img src={Img2} alt="Logo" />
            </li>
          </ul>

          <button
            type="button"
            className={s.btn_other_tab}
            onClick={() => setTab("monthly")}
          >
            I would like to give monthly
          </button>
        </div>
      )}
    </footer>
  );
};
