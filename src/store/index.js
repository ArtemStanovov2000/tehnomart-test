import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoCart";
import { enableMapSet } from "immer";

enableMapSet()

const store = configureStore({
    reducer: {
        cart: todoReducer,
    }
})

export default store;

