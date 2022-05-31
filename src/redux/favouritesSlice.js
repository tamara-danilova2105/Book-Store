import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name: 'myBook',
    initialState: {
        booksArray: []
    },
    reducers: {
        addBookInFavorites: (state, action) => {
            state.booksArray.push(action.payload)
        },
        removeBookInFavorites: (state, action) => {
            state.booksArray = state.booksArray.filter(book => book.id !== action.payload)
        }
    },
})

export const getMyBook = state => state.myBook.booksArray
export const {addBookInFavorites, removeBookInFavorites} = favouritesSlice.actions
export default favouritesSlice.reducer