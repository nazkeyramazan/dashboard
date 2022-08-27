import {configureStore} from "@reduxjs/toolkit";
import {dataSlice} from "./reducers/data";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer
    },
})