import {configureStore} from '@reduxjs/toolkit';
import bookmarkReducer from './global/bookmarkslice';
export const store = configureStore({
    reducer: {
     data:bookmarkReducer
    },
   
  });