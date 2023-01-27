import { useDispatch, useSelector } from 'react-redux';
import style from './Product.module.scss';
import { addToCart } from '../../store/reducers/cart';
import { FiMinus, FiPlus} from 'react-icons/fi';


export default function Product(props) {

    const { id, image, name, description, price, quantify } = props;

    const cart = useSelector(state => state.cart);

    const productInCart = cart.some(product => product.id === id)

    const dispatch = useDispatch();

    return (
        <div className={style.containerProduct}>
            <img src={image} />
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>R${price.toLocaleString()}</h3>
            {productInCart && window.location.pathname === '/carrinho'
                ?
                <div className={ style.quantifyProductCart}>
                    <FiMinus 
                        color='red'
                        cursor="pointer"
                    />
                    <p>{quantify}</p>
                    <FiPlus 
                        color='red'
                        cursor="pointer"
                    />
                </div>
                :
                <button
                    onClick={() => dispatch(addToCart(props))}
                >
                    ADICIONAR NO CARRINHO
                </button>
            }
        </div>
    );
}