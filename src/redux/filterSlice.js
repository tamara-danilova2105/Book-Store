import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        selectedGenre: 'Все'
    },
    reducers: {
        filterGenre: (state, action) => {
            state.selectedGenre = action.payload
        }
    }
})

export const getSelectedGenre = state => state.filter.selectedGenre
export const { filterGenre } = filterSlice.actions
export default filterSlice.reducer