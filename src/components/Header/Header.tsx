import s from "./Header.module.css";

interface HeaderProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ tab, setTab }): JSX.Element => {
  return (
    <header className={s.header}>
      <button
        type="button"
        className={`${s.tab} ${tab === "monthly" ? s.active_tab : ""}`}
        onClick={() => setTab("monthly")}
      >
        Donate monthly
      </button>
      <button
        type="button"
        className={`${s.tab} ${tab === "once" ? s.active_tab : ""}`}
        onClick={() => setTab("once")}
      >
        Donate once
      </button>
    </header>
  );
};
