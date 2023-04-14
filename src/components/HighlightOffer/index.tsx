import { IOffers } from '@/redux/store/slices/offersSlice';
import styles from './style.module.scss';
import { fonts } from '@/assets/fonts';
import { v4 as uuidv4 } from 'uuid';
import  ButtonBuy from '@/components/ButtonBuy/index';

const HighlightOffer: React.FC<IOffers> = ({id, productName, image, description, price}: IOffers) => {
	return (
		<section className={styles.wrapper} id={id}>
			<h2 className={`${styles.title} ${fonts.roboto500.className}`}>{productName}</h2>
			<img
				src={image}
				className={styles.image}
				alt="product image"
			/>
			<p className={`${styles.description} ${fonts.roboto400.className}`}>{description}</p>
			<strong className={`${styles.price}  ${fonts.roboto700.className}`}>{`$${price.toFixed(2)}`}</strong>
			<ButtonBuy key={String(uuidv4())} text='Buy' />
		</section>
	);
};

export default HighlightOffer;
