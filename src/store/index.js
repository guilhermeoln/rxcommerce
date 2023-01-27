import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/products';
import cartSlice from './reducers/cart';

const store = configureStore({
    reducer : {
        products: productsSlice,
        cart: cartSlice
    }
})



export default store;