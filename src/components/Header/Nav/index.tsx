import { fonts } from '@/assets/fonts';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { IOffers } from '@/redux/store/slices/offersSlice';
import Link from 'next/link';
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface INav  {
	showNave: boolean;
	setShowNave: Dispatch<SetStateAction<boolean>>;
}

const Nav: React.FC<INav> = ({showNave}:INav) => {
	const data = useSelector((data: IOffers[]) => data);
	const [categories, setCategories] = useState<string[] | null>(['']);

	useEffect(() => {
		const set = new Set(['']);
		data
			? data.map(({ category }) => set.add(category)) &&
        	setCategories(Array.from(set))
			: setCategories(null);
	}, [data]);

	const handleClick = (event: any) => event.preventDefault();
	
	return (
		<nav className={`${showNave === false ? styles['is-hide'] : styles.nav}`}>
			<h2 className={`${styles['nav-heading']} ${fonts.roboto700.className}`}>
        	Categories
			</h2>
			<ul className={styles['nav-ul']}>
				{categories
					? categories.slice(1).map((category) => (
						<li
							key={uuidv4()}
							className={styles.li}
						>
							<Link href=""  className={styles['nav-link']} onClick={handleClick}>
								{category}
							</Link>
						</li>
					))
					: null}
				<li key={uuidv4()} className={`${styles['nav-li']} ${fonts.roboto500.className}`} >
					<Link href="" className={styles['nav-link-inventory']} onClick={handleClick}>
           			 Inventory
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
