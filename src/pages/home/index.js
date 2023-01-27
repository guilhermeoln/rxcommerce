import { useSelector } from 'react-redux'
import Product from '../../Components/Product';
import style from './Home.module.scss';

export default function Home() {

    const products= useSelector(state => state.products)


    return (
        <div className={style.containerHome}>
            <div className={style.containerProducts}>
                {products.map((product, index) => (
                    <Product {...product} />
                ))}
            </div>
        </div>
    );
}