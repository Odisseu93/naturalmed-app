import { configureStore } from '@reduxjs/toolkit';
import offersSlice, { add, update, remove } from './slices/offersSlice';


export const store = configureStore({
	reducer: offersSlice.reducer,
});
