import css from "./LoadMoreBtn.module.css";
interface Props {
  onLoadMoreBtn: () => void;
}
const LoadMoreBtn: React.FC<Props> = ({ onLoadMoreBtn }) => {
  return (
    <>
      <button className={css.btn} type="button" onClick={onLoadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;