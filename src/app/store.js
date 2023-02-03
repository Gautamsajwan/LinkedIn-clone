import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    login: userReducer
  },
});

// It's important to note that the initialState is the default value for the login property of the root state, but it's not the actual state object that is being passed around in the application.
