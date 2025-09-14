import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "./cartSlice";
import { getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);


  if(!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800   uppercase px-4  py-4 sm:px-6 text-stone-200 text-sm md:text-base ">
      <p className="text-stone-300  space-x-4  sm:space-x-6 font-semibold ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
     <Link to="/cart">
        Open Cart &rarr;
    </Link>
    </div>
  );
}

export default CartOverview;
