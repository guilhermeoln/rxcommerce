import style from './Header.module.scss';
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {

    const navigate = useNavigate();

    const cart = useSelector(state => state.cart)

    return (
        <header className={style.containerHeader}>
            <h1 onClick={() => navigate('/')}>RXCOMMERCE</h1>
            <input
                type="text"
                placeholder="Pesquise aqui"
            />

            <div className={style.iconCart}>
                <FiShoppingCart
                    fontSize="28px"
                    cursor="pointer"
                    onClick={() => navigate("/carrinho")}
                />
                <h2>{cart.length}</h2>
            </div>
        </header>
    )
}