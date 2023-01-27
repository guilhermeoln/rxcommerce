import style from './Cart.module.scss';
import { useSelector } from 'react-redux';
import Product from '../../Components/Product';


export default function Cart() {

    const cart = useSelector(state => state.cart)

    return (
        <div className={style.containerCart}>
            <div className={style.containerProductsCart}>
                {cart.map((product) => (
                    <Product {...product} />
                ))}
            </div>
            {cart.length > 0
                && 
                <button className={style.btnFinalizarCompra}>FINALIZAR COMPRA</button>
            }            
        </div>
    );
}