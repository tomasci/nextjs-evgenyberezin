import { configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./slices/BackgroundSlice";

export default configureStore({
    reducer: {
        background: BackgroundSlice
    }
});
