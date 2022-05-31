import { createSlice } from "@reduxjs/toolkit";

export const readSlice = createSlice({
    name: 'readDone',
    initialState: {
        readList: []
    },
    reducers: {
        bookIsRead: (state, action) => {
            state.readList.push(action.payload)
        },
        removeBookIsread: (state, action) => {
            state.readList = state.readList.filter(item => item.id !== action.payload)
        }
    }
})

export const getReadBook = state => state.readDone.readList
export const { bookIsRead, removeBookIsread } = readSlice.actions;
export default readSlice.reducer;