import style from "./ui/overview.module.scss";

export const Overview = ({ text }: { text: string }) => {
  return (
    <div className={style.overviewWrapper}>
      <h2 className={style.overviewHeader}>Overview:</h2>
      <p className={style.overviewText}>{text}</p>
    </div>
  );
};
