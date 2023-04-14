import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Offers from '@/components/Offers/index';
import { IOffers } from '@/redux/store/slices/offersSlice';
import styles from '@/styles/pages/home/style.module.scss';
import Carousel from '@/components/Carousel';

export default function Home() {
	const data = useSelector((state: IOffers[]) => state);

	return (
		<main className={styles.main}>
			{ data ?
   	 			data.slice(1).map(({
    			id,
    			productName,
    			type,
    			description,
    			image,
    			price,
    			category,
    			isActive,
    		}: IOffers) => (
					type === 'highlight' && isActive === true ? (<Offers
    				key={uuidv4()}
    				id={id}
    				productName={productName}
    				type={type}
    				description={description}
    				image={image}
    				price={price}
    				category={category}
    				isActive={isActive}/>) : null
    		)
    	):null
			}
			<Carousel/>
		</main>);
}
