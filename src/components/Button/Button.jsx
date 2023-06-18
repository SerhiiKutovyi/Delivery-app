import { Btn } from './Button.styled';

const Button = ({ onClick }) => {
  return <Btn onClick={onClick}>Add to Cart</Btn>;
};

export default Button;
