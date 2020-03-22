import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cupTestReducer from '../features/cupTest/cupTestSlice';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export default configureStore({
  reducer: {
    cupTest: cupTestReducer,
  },
  middleware
});
