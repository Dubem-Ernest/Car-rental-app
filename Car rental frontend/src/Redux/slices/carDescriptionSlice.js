import { createSlice } from "@reduxjs/toolkit";

const initialState = {car:{}}

export const CarDescriptionSlice = createSlice({
    name: 'cardescription',
    initialState,
    reducers: {
      showDescription: (state, action) => {
        state.car = action.payload
      }
      },
})

export const { showDescription } = CarDescriptionSlice.actions

export default CarDescriptionSlice.reducer