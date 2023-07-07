import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
