import css from "./ErrorMessage.module.css";

interface Props {
  message: string;
}
const ErrorMessage: React.FC<Props> = ({message}) => {
  return (
    <>
      <p className={css.text}>{message}</p>
    </>
  );
};

export default ErrorMessage;