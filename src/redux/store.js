import { configureStore } from "@reduxjs/toolkit";
import myBook from './favouritesSlice'

export const store = configureStore({
    reducer: {
        myBook: myBook
    }
})