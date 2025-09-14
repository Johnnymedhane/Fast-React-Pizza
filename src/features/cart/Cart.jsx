import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
/*
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
*/
function Cart() {
  const username = useSelector((state) => state.user.username);

  const cart = useSelector(getCart);

  const dispatch = useDispatch();


  if (!cart.length) return <EmptyCart />

  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='text-xl mt-7 font-semibold'>Your cart, {username}!</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map(item => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className='space-x-2 mt-6'>

        <Button  to="/order/new" type="primary"> Order pizzas</Button>


        <Button type="secondary" onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
