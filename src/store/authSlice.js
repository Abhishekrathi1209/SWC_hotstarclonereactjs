import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "authentication",
  initialState: {
    name: "",
    email: "",
    photo: "",
  },
  reducers: {
    setUserLoginDetails(state, action){
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photo = action.payload.photo;
    },

    setSignOut(state){
        state.name = null;
        state.email = null;
        state.photo = null;
    }
  },
});

export const authactions = authSlice.actions;

export default authSlice;