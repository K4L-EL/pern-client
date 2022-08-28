import { configureStore} from '@reduxjs/toolkit'
import Counter from './counterSlice'

export const store = configureStore({

    reducer: {
        counter: Counter
    }
})