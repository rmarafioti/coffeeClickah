import { createSlice } from "@reduxjs/toolkit";
import { coffeeProducerData } from "../data/coffeeProducerData";
import CoffeeCount from "./CoffeeCount";
import CoffeeSecCount from "./CoffeeSecCount";
import CoffeeList from "./CoffeeList";

const initialState = {};

const coffeeSlice = createSlice({
  reducers: {
    increment: (state) => {},
    purchase: (state) => {},
  },
});

export const { increment, purchase } = coffeeSlice.actions;

export default coffeeSlice.reducer;
