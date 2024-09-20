import css from "./ErrorMessage.module.css";

const ErrorMessage = ({message}) => {
  return (
    <>
      <p className={css.text}>{message}</p>
    </>
  );
};

export default ErrorMessage;