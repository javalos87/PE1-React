import { FaCartArrowDown } from "react-icons/fa";
import "./cartwidget.css";

const CartWidget = ({ number }) => {
  return (
    <>
      <a className="nav-link cart">
        <i></i>
        <FaCartArrowDown color="blue" size="1.75rem" />
        <span id="cart_menu_num">{number}</span>
      </a>
    </>
  );
};

export default CartWidget;
