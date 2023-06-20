import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "./FavSlice";

const store = configureStore({
    reducer: {
        favourite: FavSlice.reducer
    }
})

export default store;