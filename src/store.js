import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { capsulesReducer } from "./reducers/capsules";

const reducers = combineReducers({
  capsules: capsulesReducer,
});

const store = configureStore(
  {
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  composeWithDevTools()
);

export default store;

export const apiPath = "https://api.spacexdata.com/v3";
