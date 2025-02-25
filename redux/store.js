import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../redux/quoteSlice";

export const store = configureStore({
    reducer: {
        quotes: quoteReducer,
    },
});
