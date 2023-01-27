import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid} from 'uuid';

const initialState = [
    {
        id: uuid(),
        image: 'https://etlimportados.com.br/wp-content/uploads/2021/10/iphone-13-pro-max-silver-select-1.png',
        name: 'Iphone 13 PRO MAX',
        description: 'lorem ipsum',
        price: 5200
    },
    {
        id: uuid(),
        image: 'https://http2.mlstatic.com/D_NQ_NP_770607-MLM51559385328_092022-O.jpg',
        name: 'Iphone 14 PRO MAX',
        description: 'lorem ipsum',
        price: 7200
    },
    {
        id: uuid(),
        image: 'https://trocafone.vtexassets.com/arquivos/ids/228098/iphone-11-pro-max-cinza-costas.png?v=637872017520200000',
        name: 'Iphone 11 PRO',
        description: 'lorem ipsum',
        price: 3200
    },
    {
        id: uuid(),
        image: 'https://imgs.casasbahia.com.br/15253200/1xg.jpg?imwidth=500',
        name: 'Iphone XR',
        description: 'lorem ipsum',
        price: 2200
    }
]


const productsSlice = createSlice({
    name: 'products',
    initialState
})


export default productsSlice.reducer;