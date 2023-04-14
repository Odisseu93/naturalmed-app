import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import HighlightOffer from '@/components/HighlightOffer/index';
import { IOffers } from '@/redux/store/slices/offersSlice';

export default function Home() {
	const data = useSelector((state: any) => state);

	return (
	 data ?
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
				type === 'highlight' && isActive === true ? (<HighlightOffer
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
	);
}
