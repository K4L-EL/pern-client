import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: {
        number: 0,
        name: 'Mike'
    },

}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value.number += 1
            state.value.name = 'Oliver'
        },
        decrement: (state) => {
            state.value -= 1

        },
        double: (state) => {
            state.value = state.value * 2
        }
    }
})


export const { increment, decrement, double} = counterSlice.actions
export default counterSlice.reducer