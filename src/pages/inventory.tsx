import { fonts } from '@/assets/fonts';
import Header from '@/components/Header';
import { IOffers, add, remove } from '@/redux/store/slices/offersSlice';
import styles from '@/styles/pages/inventory/style.module.scss';
import { useState, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Inventory: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [imageBase64, setImageBase64] = useState('');
	const data = useSelector((state:IOffers[]) => state);
	const dispatch = useDispatch();


	const productNameRef = useRef<HTMLInputElement>(null);
	const typeRef = useRef<HTMLSelectElement>(null);
	const categoryRef = useRef<HTMLSelectElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	const priceRef = useRef<HTMLInputElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);
	const isActiveRef = useRef<HTMLSelectElement>(null);


	const handleFileInputChange = (e: any) => {
	  e.stopPropagation();
	  const file = e.target.files[0];
	  const reader = new FileReader();
  
	  reader.readAsDataURL(file);
  
	  reader.onload = () => {
	    const base64 = reader.result;
			setImageBase64(base64 ? base64.toString() : '');
	  };
	};



	const clearForm = ()=> {
				
		productNameRef.current!.value = '';
		typeRef.current!.value = '';
	    categoryRef.current!.value = '';
		descriptionRef.current!.value = '';
		priceRef.current!.value = '';
		setImageBase64('');
	}; 
	
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data  = {
			productName: productNameRef.current?.value,
			type: typeRef.current?.value,
			category: categoryRef.current?.value,
			description: descriptionRef.current?.value,
			price: priceRef.current?.value,
			image: imageBase64,
			isActive: isActiveRef.current?.value  === 'yes' ? true: false,
		};

		clearForm();

		dispatch(add(data));
		  
		// console.log(data);
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
							onClick={()=>setShowModal(true)}
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
										<button className={`${styles['product__btns__edit']} ${fonts.roboto400.className}`}>
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
					<form key={uuidv4()} className={styles['form']} onSubmit={(e)=> onSubmit(e)}>
						<div className={styles['form-group']}>
							<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="name">Name</label>
							<input ref={productNameRef} className={`${styles.inp} ${fonts.roboto400}`} type="text" id="name"  required/>
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
							<select  ref={categoryRef} name="" id="category" required>
								<option value=""></option>
								<option value="Healty">Healty & Care</option>
								<option value="food">Food</option>
								<option value="pet">Pet</option>
								<option value="hardware">Hardware</option>
								<option value="flowers">Flowers</option>
								<option value="garden">Garden&apos;s</option>
								<option value="garden">Beauty & Hair</option>
							</select>
						</div>
						<div className={styles['form-group']}>						
							<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="price">Price</label>
							<input ref={priceRef} className={`${styles.inp} ${fonts.roboto400}`} type="number" name="" id="price"  step="0.01" placeholder='$' required/>
						</div>
						<div className={`${styles['form-group']}`}>
							{!imageBase64 || imageBase64 === '' ? null : <img  className={styles['form-group-img']} src={imageBase64} alt="uploaded image" />}
							<label  className={`${styles.label} ${styles['label-product-img']} ${fonts.roboto500.className}`} htmlFor='img-product-input' title='Submit a product image'> <img src="/assets/img-upload.png" alt="upload icon" /></label>
							<input  ref={imageRef} className={`${styles.inp} ${fonts.roboto400}`} onChange={(e)=> handleFileInputChange(e)} type="file" name="image" accept="image/*" id="img-product-input" />
						</div>
						<div className={`${styles['form-group']} ${styles['form-group-status']}`}>
							<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="category">Is active?</label >
							<select  ref={isActiveRef} name="" id="status" required>
								<option value=""></option>
								<option value="yes">Yes</option>
								<option value="no">no</option>
							</select>
						</div>
						<div className={styles['form-group']}>	
							<label className={`${styles.label} ${fonts.roboto500.className}`} htmlFor="Description">Description</label>
							<textarea ref={descriptionRef} name="" id="Description" maxLength={147} title='a short description of the product' required/>
						</div>
						<div className={styles['form-group-btns']}>	
							<button className={`${styles['btn__save']} ${fonts.roboto400.className}`} >Save</button>
							<button className={`${styles['btn__cancel']}  ${fonts.roboto400.className}`}  onClick={()=> {setShowModal(false); clearForm();}} type='button'>Cancel</button>
						</div>
					</form>
				</div>):null}

				
			</main>
		</>
	);
};

export default Inventory;
