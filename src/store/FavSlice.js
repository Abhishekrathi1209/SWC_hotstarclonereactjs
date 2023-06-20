import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "favourite",
  initialState: {
    favmovielist: [],
  },
  reducers: {
    addtofav(state, action) {
      const newitem = action.payload;
      const existingitem = state.favmovielist.find((item) => item.id === newitem.id);
      if (existingitem) {
        console.log("Already added");
      } else {
        state.favmovielist.push(newitem);
      }
    },
    removefromfav(state, action) {
      const newitem = action.payload;

      state.favmovielist = state.favmovielist.filter((item) => item.id !== newitem.id)
    },
  },
});

export const favactions = FavSlice.actions;

export default FavSlice;
