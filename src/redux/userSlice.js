import {createSlice} from '@reduxjs/toolkit'

const initialState = {

        fname: 'Jhon',
        age: 23,
        balance: 56000
    

}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeName: (state) => {
            state.name = 'Alex'
        },

        changeAge: (state) => {
            state.age = 21
        },

        changeBalance: (state) => {
            state.balance = state.balance*2
        }
    }
})

export const { changeName, changeAge, changeBalance } = userSlice.actions;
export default userSlice.reducer;

