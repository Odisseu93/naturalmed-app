![logo-white](https://user-images.githubusercontent.com/76600539/231495078-5ed609bd-9873-4e74-ace8-7c5d0ca38fa0.png)


# Naturalmed App
![20230417_172549(1)](https://user-images.githubusercontent.com/76600539/232605529-c77cd13f-29a4-43b1-8f23-698a660f61fa.gif)

[Live WebSite / _Site_](https://naturalmed-app.vercel.app/)

This project is part of a technical test that I participated in for 7 days.
 The challenge was to create an application following the following design:

_*Este projeto faz parte de um teste técnico a qual eu participei durante 7 dias, o desafio  era e criar uma aplicação seguindo o seguinte design:_

![image](https://user-images.githubusercontent.com/76600539/232585908-a160ca65-82e0-430e-96e1-910d9e51fa43.png)

And also create an admin panel for the application.

_*E também criar um painel administrativo para aplicação_

![image](https://user-images.githubusercontent.com/76600539/232586796-07cde635-0c36-43a1-99fd-ac9fffa45359.png)


## Project organization
### Trello
I started the project by organizing my tasks on [Trello](https://trello.com/), using the agile [Kanban](https://www.atlassian.com/agile/kanban) methodology. Here's a screenshot of my board.

_*Eu comecei o projeto organizando as minhas tarefa no [Trello](https://trello.com/), utilizando a metodologia ágil [Kanban](https://www.atlassian.com/agile/kanban), aqui está uma captura de tela do meu quadro._

<details>

<summary>Show image / Mostrar imagem</summary>

![image](https://user-images.githubusercontent.com/76600539/232589328-e8430b67-e8fd-4f17-bf30-9745cd8c4a80.png)

</details>

I created some initial cards and moved on to the next tool, [Figma](figma.com/) / _*Crie alguns cartões inicias e fui para a próxima ferramenta o [Figma](figma.com/)._

### Figma
My idea for the design was to think of something like an online convenience store (where the seller could register their products and publish them as offers on their website). Here is an animation and the links to access the project on the platform.

*_A minha ideia para o design foi pensar em algo como uma loja de conveniência online (lá o vendedor poderia cadastrar seus produtos e publicá-los como oferta em seu site, segue uma animação e os links para o acesso ao projeto na plataforma._

![20230417_163542(1)](https://user-images.githubusercontent.com/76600539/232593638-43d0b14c-7cf4-46cc-a5bd-d955896bef97.gif)


[Presentation mode / modo apresentação](https://www.figma.com/proto/VGaePG0mr1dTSwhPWNVdmS/ws---work-design?node-id=5-2&scaling=contain&page-id=0%3A1&starting-point-node-id=5%3A2&show-proto-sidebar=1)


[Design Projet / Projeto ](https://www.figma.com/file/VGaePG0mr1dTSwhPWNVdmS/ws---work-design?node-id=0-1)

### Redux
 To manage the application state, I used [Redux](https://redux.js.org/), which is a predictable state container for JavaScript applications. I used this library to organize and perform some operations in the store, similar to what is done in databases, but as it is a simple frontend application, it does not have data persistence.

_*Para fazer o gerenciamento de estados da aplicação eu utilizei o [Redux](https://redux.js.org/), que é um contêiner de estado previsível para aplicativos JavaScript. Usei esta biblioteca para organizar e realizar algumas operações na loja, fazendo algo similar ao que é feito em banco de dados, mas como é uma aplicação simples de Frontend não tem a persistência de dados._

I created this flowchart to help me visualize the structure I was going to create. / _Eu crie este fluxograma para me ajudar a visualizar a estrutura que iria criar_
![image](https://user-images.githubusercontent.com/76600539/232596821-79fc1750-b594-4e12-94d5-8cbf7757751a.png)

Here is the structure transformed into code. / _Aqui está estrutura transformada em código_

<details>
<summary>Code / Código</summary>

```tsx
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
```


</details>


**[full code /código completo](./src/redux/store/slices/offersSlice/index.ts)**

## Tech Stack /_Tecnologias_

- [Next.js](https://nextjs.org/)
- [Typesscript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [Sass](https://sass-lang.com/)
- [CSS modules](https://github.com/css-modules/css-modules)


## Run Locally / Executando localmente

Clone the project

```bash
  git clone https://github.com/Odisseu93/naturalmed-app
```

Go to the project directory / Vá para a pasta do projeto

```bash
  cd naturalmed-app
```

Install dependencies / instale as dependencias

```bash
  npm install
```

Start the server / inicie o servidor

```bash
  npm run start
```



## License / _Licença_
[MIT](/LICENSE.MD)


