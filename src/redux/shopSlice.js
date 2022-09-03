import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product: 'PlayStation',
    price: 500 
    
}


export const shopSlice = createSlice({

    name: 'shop',
    initialState,
    reducers: {
        setProduct: (state) => {
            state.product = 'Xbox'
            state.price = 400
        }
    }
})


export const {setProduct} = shopSlice.actions;
export default shopSlice.reducer;