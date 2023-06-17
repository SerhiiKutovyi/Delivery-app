import { Btn } from './Button.styled';

const Button = ({ onClick }) => {
  return <Btn onClick={onClick}>add to Cart</Btn>;
};

export default Button;
