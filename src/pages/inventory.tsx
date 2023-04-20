import { fonts } from '@/assets/fonts';
import Header from '@/components/Header';
import { IOffers, add, remove, update } from '@/redux/store/slices/offersSlice';
import styles from '@/styles/pages/inventory/style.module.scss';
import { useState, useRef, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getDataLocalStorage, localStorageClear, setDataLocalStorage } from '@/utils/storage/localStorage';

const Inventory: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [clearForm, setClearForm] = useState(false);
	const data = useSelector((state:IOffers[]) => state);
	const dispatch = useDispatch();
	const [formUpdate, setFormUpdate] = useState<IOffers | undefined >(undefined);
	
	
	

	
	
	const Form: React.FC = () => {

		
		const [imageBase64, setImageBase64] = useState('');
		const productNameRef = useRef<HTMLInputElement>(null);
		const typeRef = useRef<HTMLSelectElement>(null);
		const categoryRef = useRef<HTMLSelectElement>(null);
		const descriptionRef = useRef<HTMLTextAreaElement>(null);
		const priceRef = useRef<HTMLInputElement>(null);
		const imageRef = useRef<HTMLInputElement>(null);
		const isActiveRef = useRef<HTMLSelectElement>(null);
	


		const saveDatainLocalStorage = ()=> {
			setDataLocalStorage('temporary',
				{name :productNameRef.current!.value ,
					type: typeRef.current!.value ,
					category: categoryRef.current!.value ,
					description: descriptionRef.current!.value ,
					price: priceRef.current!.value ,
					isActive: isActiveRef.current!.value});
		};

		const setDatafromLocalStorage = ()=> {

			if(getDataLocalStorage('temporary')) {
				const {
					name,
					type,
					category,
					description,
					price,
					isActive} = getDataLocalStorage('temporary');

					
				 if(productNameRef.current) {
					setTimeout(() => {
					productNameRef.current!.value = name ?? '';
					typeRef.current!.value = type ?? '';
					categoryRef.current!.value = category ?? '';
					descriptionRef.current!.value = description ?? '';
					priceRef.current!.value = price ?? '';
					isActiveRef.current!.value = isActive ?? '';
					}, 500);	
	
				 }

			}else null;

			localStorageClear();
		};


	
		const handleFileInputChange = (e: any) => {
		 					
		  saveDatainLocalStorage();	
		  const file = e.target.files[0];
		  const reader = new FileReader();
		  
		  reader.readAsDataURL(file);
	  
		  reader.onload = () => {
			  const base64 = reader.result;
			  setImageBase64(base64 ? base64.toString() : '');
			};
		};
	
	
	
		const clear = ()=> {
					
			productNameRef.current!.value = '';
			typeRef.current!.value = '';
			categoryRef.current!.value = '';
			descriptionRef.current!.value = '';
			priceRef.current!.value = '';
			setImageBase64('');
		}; 
			
		
		useEffect(() => {

			if(formUpdate) {
				const  {productName , type, category, description, price, image, isActive}	= formUpdate;

				productNameRef.current!.value = productName;
				typeRef.current!.value = type;
				categoryRef.current!.value = category;
				descriptionRef.current!.value = description;
				priceRef.current!.value = String(price);
				setImageBase64(image);
				isActiveRef.current!.value = isActive ? 'yes' : 'no';

				setDataLocalStorage('temporary',
					{
						name : productName,
						type: type,
						category: category,
						description: description,
						price: String(price),
						isActive:  isActive ? 'yes' : 'no'
					});

				setTimeout(() => {
					setDatafromLocalStorage();
				}, 500);
	

			} else setFormUpdate(undefined);

		}, [formUpdate]);

		
		useEffect(() => {
			if(clearForm){
				setFormUpdate(undefined);
				 clear();
				 setTimeout(() => setClearForm(false), 500);
			}
		}, [clearForm]);
		

		
		const onSubmit = (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const product  = {
				productName: productNameRef.current?.value,
				type: typeRef.current?.value,
				category: categoryRef.current?.value,
				description: descriptionRef.current?.value,
				price: priceRef.current?.value,
				image: imageBase64,
				isActive: isActiveRef.current?.value  === 'yes' ? true: false,
			};
	
			clear();
	
			!formUpdate ? dispatch(add(product)) : dispatch(update({id: formUpdate.id, ...product}));
			setShowModal(false);
			  
		};
		return (
			<form key={uuidv4()} className={styles['form']} onSubmit={(e) => onSubmit(e)}>
				<div className={styles['form-group']}>
					<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="name">Name</label>
					<input ref={productNameRef} className={`${styles.inp} ${fonts.roboto400}`} type="text" id="name" required />
				</div>
				<div className={styles['form-group']}>
					<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="type">Type</label>
					<select ref={typeRef} name="" id="type" required>
						<option value=""></option>
						<option value="default">Default</option>
						<option value="highlight">Highlight</option>
						<option value="carousel">Carousel</option>
					</select>
				</div>
				<div className={styles['form-group']}>
				</div>
				<div className={styles['form-group']}>
					<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="category">category</label >
					<select ref={categoryRef} name="" id="category" required>
						<option value=""></option>
						<option value="Healty & Care">Healty & Care</option>
						<option value="Food">Food</option>
						<option value="Pet">Pet</option>
						<option value="Hardware">Hardware</option>
						<option value="Flowers">Flowers</option>
						<option value="Garden's">Garden&apos;s</option>
						<option value="Beauty & Hair">Beauty & Hair</option>
					</select>
				</div>
				<div className={styles['form-group']}>
					<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="price">Price</label>
					<input ref={priceRef} className={`${styles.inp} ${fonts.roboto400}`} type="number" name="" id="price" step="0.01" placeholder='$' required />
				</div>
				<div className={`${styles['form-group']}`}>
					<label className={`${styles.label} ${styles['label-product-img']} ${fonts.roboto500.className}`} htmlFor='img-product-input' title='Submit a product image'> <img src="/assets/img-upload.png" alt="upload icon" /></label>
					{!imageBase64 || imageBase64 === '' ? null : (
						<div className={styles['form-group-img']}>
							<img src={imageBase64} alt="uploaded image" width={300} height={200} />
					 </div>		
					)}
					<input ref={imageRef} className={`${styles.inp} ${fonts.roboto400}`} 
						onChange={(e) => {
							handleFileInputChange(e);
							(setTimeout(()=>setDatafromLocalStorage(),500));
						}} type="file" name="image" accept="image/*" id="img-product-input" />
				</div>
				<div className={`${styles['form-group']} ${styles['form-group-status']}`}>
					<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="category">Is active?</label >
					<select ref={isActiveRef} name="" id="status" required>
						<option value=""></option>
						<option value="yes">Yes</option>
						<option value="no">no</option>
					</select>
				</div>
				<div className={styles['form-group']}>
					<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="Description">Description</label>
					<textarea ref={descriptionRef} name="" id="Description" maxLength={147} title='a short description of the product' required />
				</div>
				<div className={styles['form-group-btns']}>
					<button className={`${styles['btn__save']} ${fonts.roboto400.className}`} >Save</button>
					<button className={`${styles['btn__cancel']}  ${fonts.roboto400.className}`} onClick={() => { setShowModal(false); clear(); }} type='button'>Cancel</button>
				</div>
			</form>

		);
	};


	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles['list-of-products']}>
					<div className={styles['box-1']}>
						<h2 className={`${styles['list-of-products__heading']} ${fonts.roboto700.className}`}>
							Products
						</h2>
						<button
							className={`${styles['list-of-products__btn-add']} ${fonts.roboto500.className}`}
							onClick={()=>{
								setClearForm(true);
								setShowModal(true);
								localStorageClear();
							}}
						>
             				 + New
						</button>
					</div>
					<div className={styles['cards-wrapper']}>
						{data ? data.map(({...p})=>{return(
							<div key={uuidv4()} className={styles['product-card']}>
								<div className={styles.product}>
									<p className={`${styles['product__name']} ${fonts.roboto400.className}`}>
										{p.productName}
									</p>
									<p className={`${styles['product__price']} ${fonts.roboto400.className}`}>
              							$ {p.price}
									</p>
									<div className={styles['product__btns']}>
										<button
										 onClick={()=>{ 
												setShowModal(true);
												setFormUpdate(p);
											}} 
											className={`${styles['product__btns__edit']} ${fonts.roboto400.className}`}>
											Edit
										</button>
										<button
											className={`${styles['product__btns__delete']} ${fonts.roboto400.className}`} 
											onClick={()=> dispatch(remove({id: p.id}))}
										>
											X
										</button>
									</div>
								</div>
							</div>);}) :null}
					</div>
				</section>
				{showModal? (<div className={styles.modal}>
					<Form />	
				</div>):null}

				
			</main>
		</>
	);
};

export default Inventory;
