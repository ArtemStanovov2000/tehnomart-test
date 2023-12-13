import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet()

const todoCart = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addTodo(state, action) {
            state.cart.push({
                id: action.payload.id
            })
        }
    }
})

export const { addTodo } = todoCart.actions
export default todoCart.reducer