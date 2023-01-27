import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import Header from '../Components/Header';
import Cart from '../pages/cart';


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/carrinho" element={ <Cart />} />
            </Routes>
        </BrowserRouter>
    );
}