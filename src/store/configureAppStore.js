import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./createRootReducer";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preLoadedState = {}) {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
    preLoadedState,
    enhancers: [],
  });

  sagaMiddleware.run(sagas);

  return store;
}
