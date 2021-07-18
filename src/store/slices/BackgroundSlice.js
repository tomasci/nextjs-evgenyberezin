import { createSlice } from "@reduxjs/toolkit";

export const BackgroundSlice = createSlice({
    name: "background",
    initialState: {
        value: 0
    },
    reducers: {
        toggleBackground: (state, action) => {
            state.value = action.payload.value;
        }
    }
});

// Action creators are generated for each case reducer function
export const { toggleBackground } = BackgroundSlice.actions;

export default BackgroundSlice.reducer;
