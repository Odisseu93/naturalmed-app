import { createSlice } from '@reduxjs/toolkit';


export interface IOffers {
    productName: string;
    type: string;
    description: string;
    price: number;
    image: string;
    isActive: boolean;
}


const initialState: IOffers[] = [
	{
		productName: '',
		type: '',
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
			const { productName, type, description, price, image, isActive} = action.payload;
			const attributes = [productName, type, description, price, image, isActive];
	
			if (attributes.includes(undefined) || attributes.includes('')) {
				if (!productName) return console.error('the name has not been added!');
				if (!description) return console.error('the description has not been added!');
				if (!price) return console.error('the price has not been added!');
				if (!image) return console.error('the image has not been added!');
				if (!type) return console.error('the type was not selected!');
				if (!isActive) return console.error('the stutus was not selected!');
			}
	
			const offer: IOffers = {
				productName: action.payload.productName,
				type: action.payload.type,
				description: action.payload.description,
				price: action.payload.price,
				image: action.payload.image,
				isActive: action.payload.isActive,
			};
			state.push(offer);
		},
		// update:{},
		// delete:{},
	}
});


export default offersSlice;

export const { add } = offersSlice.actions;
