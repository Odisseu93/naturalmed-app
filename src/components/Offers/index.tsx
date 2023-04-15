import { IOffers } from '@/redux/store/slices/offersSlice';
import styles from './style.module.scss';
import { fonts } from '@/assets/fonts';
import { v4 as uuidv4 } from 'uuid';
import  ButtonBuy from '@/components/ButtonBuy/index';

const Offers: React.FC<IOffers> = ({id, productName, image, description, price, type}: IOffers) => {
	return (
		<section className={type === 'highlight' ? styles['wrapper-highlight']: ` ${styles['wrapper-default']}`} id={id}>
			<div className={styles.box1}>
				<h2 className={`${styles.title} ${fonts.roboto500.className}`}>{productName}</h2>
				<img
					src={image}
					className={styles.image}
					alt="product image"
				/>
			</div>
			<div className={styles.box2}>
				<strong className={`${styles.price}  ${fonts.roboto700.className}`}>{`$${price.toFixed(2)}`}</strong>
				<p className={`${styles.description} ${fonts.roboto400.className}`}>{description}</p>
				<ButtonBuy key={String(uuidv4())} text='Buy' />
			</div>
		</section>
	);
};

export default Offers;
