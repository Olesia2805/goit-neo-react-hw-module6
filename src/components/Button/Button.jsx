import btnCss from './Button.module.css';

const Button = ({ onClick, children }) => {
  return (
    <button className={btnCss.btn} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
