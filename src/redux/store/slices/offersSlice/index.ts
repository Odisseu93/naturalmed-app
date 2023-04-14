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
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'carousel',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 9.5,
		image:
      'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: true,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'carousel',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 18.9,
		image:
      'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: true,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'carousel',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 25.0,
		image:
      'https://images.unsplash.com/photo-1564277287253-934c868e54ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbCUyMHJlbWVkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		isActive: true,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'carousel',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 10.0,
		image:
      'https://images.unsplash.com/photo-1512867957657-38dbae50a35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: true,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'default',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 5.0,
		image:
      'https://images.unsplash.com/photo-1512867957657-38dbae50a35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: true,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'carousel',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 8.0,
		image:
      'https://images.unsplash.com/photo-1563483783225-fdcd3bf7fb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: true,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'default',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 32.0,
		image:
      'https://images.unsplash.com/photo-1635943051866-3271c28168f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: false,
	},
	{
		id: uuidv4(),
		productName: 'Lorem ipsum dolor sit amet.',
		type: 'carousel',
		category: 'Healty & Care',
		description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non quasi provident. Fugit ratione nostrum praesentium, doloremque qui nobis illo!',
		price: 32.0,
		image:
      'https://images.unsplash.com/photo-1630340867123-1ee66b32abe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG5hdHVyYWwlMjByZW1lZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		isActive: false,
	},
	{
		id: uuidv4(),
		productName: 'Omega 3',
		type: 'highlight',
		category: 'food',
		description:
      'super suplement for your health and well-being natural and 100% functional, take advantage og this offer',
		price: 10.5,
		image:
      'https://images.unsplash.com/photo-1633171031508-a8f26271e8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
		isActive: true,
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
