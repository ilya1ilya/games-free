import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./gamesSlice";
import specificGameReducer from "./gameSlice";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    specificGame: specificGameReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
