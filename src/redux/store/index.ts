import { configureStore } from '@reduxjs/toolkit';
import offersSlice from './slices/offersSlice';
import { setDataLocalStorage } from '@/storage/localStorage';


export const store = configureStore({
	reducer: offersSlice.reducer,
});

store.subscribe(() => setDataLocalStorage('data', store.getState()));
