import { bearStore } from "./store";

const Button = () => {
  const { bears } = bearStore();

  return <button>버튼{bears}</button>;
};
export default Button;
