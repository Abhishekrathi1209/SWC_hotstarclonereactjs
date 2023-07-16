import {configureStore} from "@reduxjs/toolkit";
import FavSlice from "./FavSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        favourite: FavSlice.reducer,
        authentication: authSlice.reducer
    }
})

export default store;