import { createSlice } from '@reduxjs/toolkit';


const initialState = [];


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            let searchProduct = state.some(productInCart => productInCart?.id === payload.id);

            if (!searchProduct) {
                return [
                    ...state,
                    {
                        ...payload,
                        quantify: 0
                    }
                ]
            } 

            return state;
        }
    }
})


export const { addToCart } = cartSlice.actions;


export default cartSlice.reducer;