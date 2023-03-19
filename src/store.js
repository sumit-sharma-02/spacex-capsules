import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { capsuleDetailsReducer, capsulesReducer } from "./reducers/capsules";

const reducers = combineReducers({
  capsules: capsulesReducer,
  capsule: capsuleDetailsReducer,
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
