import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'
import shopSlice from './shopSlice'



export const store = configureStore(
    {
    reducer: {
        counter: counterReducer,
        user: userReducer,
        shop: shopSlice
    }
})
