import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface IOffers {
		id: string;
    productName: string;
    type: string;
		category: string;
    description: string;
    price: number;
    image: string;
    isActive: boolean;
}


const initialState: IOffers[] = [
	{
		id: '',
		productName: '',
		type: '',
		category: '',
		description: '',
		price: 0,
		image: '',
		isActive: false,
	},
];

const offersSlice = createSlice({
	name: 'offers',
	initialState,
	reducers:{
		add: (state, action) => {
			const { productName, type, category , description, price, image, isActive} = action.payload;
			const attributes = [productName, type, category , description, price, image, isActive];
	
			if (attributes.includes(undefined) || attributes.includes('')) {
				if (!productName) return console.error('the name has not been added!');
				if (!description) return console.error('the description has not been added!');
				if (!price) return console.error('the price has not been added!');
				if (!image) return console.error('the image has not been added!');
				if (!type) return console.error('the type was not selected!');
				if (!isActive) return console.error('the stutus was not selected!');
				if (!category) return console.error('the category was not selected!');
			}

			const uuid = uuidv4();
	
			const offer: IOffers = {
				id: uuid,
				productName: action.payload.productName,
				type: action.payload.type,
				category: action.payload.category,
				description: action.payload.description,
				price: action.payload.price,
				image: action.payload.image,
				isActive: action.payload.isActive,
			};
			state.push(offer);
		},
		update:(state, action) => {

			const {id, productName, type, category , description, price, image, isActive} = action.payload;
			const attributes = [productName, type, category , description, price, image, isActive];
	
			if (attributes.includes(undefined) || attributes.includes('')) {
				if (!productName) return console.error('the name has not been added!');
				if (!description) return console.error('the description has not been added!');
				if (!price) return console.error('the price has not been added!');
				if (!image) return console.error('the image has not been added!');
				if (!type) return console.error('the type was not selected!');
				if (!isActive) return console.error('the stutus was not selected!');
				if (!category) return console.error('the category was not selected!');
			}

			
			const offer: IOffers = {
				id: action.payload.id,
				productName: action.payload.productName,
				type: action.payload.type,
				category: action.payload.category,
				description: action.payload.description,
				price: action.payload.price,
				image: action.payload.image,
				isActive: action.payload.isActive,
			};

			const index = state.findIndex((item) => item.id === id);
			if (!state.find((item) => item.id === id)) return console.error('the product was not found!');
			else {
				state.splice(index, 1, offer);
				return state;
			}

		},
		remove: (state, action) => {
			const { id } = action.payload;
			if (!id) {
				console.error('Error when trying to delete the product, the product was not found!');
				return;
			}
			console.log(state.find(offer => offer.id === id) && `Product ${action.payload.id} removido`);
			return state.filter((offer) => offer.id !== String(id));
		},
	}
});


export default offersSlice;

export const { add, update, remove } = offersSlice.actions;
