import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.scss';
import { fonts } from '@/assets/fonts';
import { useSelector } from 'react-redux';
import { IOffers } from '@/redux/store/slices/offersSlice';



export default function Carousel() {

	const initialStateSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const data = useSelector( (state: IOffers []) => state);
	const [settings, setSettings] = useState(initialStateSettings);
	
	function checkViewPortWidth() {
		const vw = Number(window.innerWidth);
		switch (true) {
		case ( vw >= 1200) :
			setSettings(()=> {
				return {
					dots: true,
					infinite: true,
					speed: 800,
					slidesToShow: 4,
					slidesToScroll: 1,
				};});
			break;
		case ( vw >= 768 && vw < 1200) :
			setSettings(()=> {
				return {
					dots: true,
					infinite: true,
					speed: 800,
					slidesToShow: 3,
					slidesToScroll: 1,
				};});
			break;
		case ( vw < 768) :
			setSettings(()=> {
				return {
					dots: true,
					infinite: true,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
				};});
			break;
		default:
			break;
		}
	}

	let objWindowIsNotUndefined = false; 
	(typeof window === 'undefined') ? objWindowIsNotUndefined = false : objWindowIsNotUndefined = true;

	useEffect(() => {
		if(objWindowIsNotUndefined) checkViewPortWidth();
	}, []);
	
	
	if(objWindowIsNotUndefined) window.onresize = ()=> {
		checkViewPortWidth();
	};	
 
	// console.log(data)
	return (
		<Slider {...settings}>
			{data ?
        	data.map(({ id, image, price, type, isActive }) =>
        	isActive && type === 'carousel' ? (
        		<section className={styles.carousel} id={id} key={uuidv4()}>
        			<img src={image} className={styles.image} alt="product image" />
        			<p className={styles.price}>
        				<strong className={fonts.roboto700.className}>$ {price.toFixed(2)}</strong>
        			</p>
        		</section>
        	) : null
        	) : null}
		</Slider>
	);
}
