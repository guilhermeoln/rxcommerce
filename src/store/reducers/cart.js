import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = [];


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            let searchProduct = state.some(productInCart => productInCart?.id === payload.id);

            if (!searchProduct) {
                toast.success('Produto adicionado com sucesso!')

                return [
                    ...state,
                    {
                        ...payload,
                        quantity: 0
                    }
                ]
            } 

            toast.warning('O produto já está no carrinho!')

            return state;
        },
        modifyQuantity: (state, {payload}) => {
            state = state.map(productInCart => {
                if(productInCart.id === payload.id) productInCart.quantity += payload.quantity;
                return productInCart;
            })
        }

    }
})


export const { addToCart, modifyQuantity } = cartSlice.actions;


export default cartSlice.reducer;