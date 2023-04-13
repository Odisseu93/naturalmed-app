import { configureStore } from '@reduxjs/toolkit';
import offersSlice, { add, update, remove } from './slices/offersSlice';


export const store = configureStore({
	reducer: offersSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(add({
	productName: 'apple',
	type: 'default',
	category: 'food',
	description: 'blah blah blah...',
	price: 10.50,
	image: 'sdgdsgsdgs',
	isActive: false,}));