import { fonts } from '@/assets/fonts';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { IOffers } from '@/redux/store/slices/offersSlice';
import Link from 'next/link';
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

interface INav {
	showNave: boolean;
	setShowNave: Dispatch<SetStateAction<boolean>>;
}

const Nav: React.FC<INav> = ({ showNave }: INav) => {
	const data = useSelector((data: IOffers[]) => data);
	const [categories, setCategories] = useState<string[] | null>(['']);
	const router = useRouter();

	useEffect(() => {
		console.log(router.pathname);
		const set = new Set(['']);
		data
			? data.map(({ category }) => set.add(category)) &&
			setCategories(Array.from(set))
			: setCategories(null);
	}, [data]);

	const preventDefault = (event: any) => event.preventDefault();

	return (
		<>
			{router.pathname === '/' ? (
				<nav className={`${showNave === false ? styles['is-hide'] : styles.nav}`}>
					<h2 className={`${styles['nav-heading']} ${fonts.roboto700.className}`}>
						pages
					</h2>
					<ul className={styles['nav-ul']}>
						<li
							key={uuidv4()}
							className={`${styles['nav-li']} ${fonts.roboto500.className}`}
						>
							<Link href="/inventory" className={styles['nav-link-inventory']}>
								Inventory
							</Link>
						</li>
					</ul>
					<h2 className={`${styles['nav-heading']} ${fonts.roboto700.className}`}>
						Categories
					</h2>
					<ul className={styles['nav-ul']}>
						{categories
							? categories.slice(1).map((category) => (
								<li key={uuidv4()} className={styles.li}>
									<Link
										href=""
										className={styles['nav-link']}
										onClick={preventDefault}
									>
										{category}
									</Link>
								</li>
							))
							: null}
					</ul>
				</nav>
			) : (<nav className={`${showNave === false ? styles['is-hide'] : styles.nav}`}>
				<h2 className={`${styles['nav-heading']} ${fonts.roboto700.className}`}>
					pages
				</h2>
				<ul className={styles['nav-ul']}>
					<li
						key={uuidv4()}
						className={`${styles['nav-li']} ${fonts.roboto500.className}`}
					>
						<Link href="/" className={styles['nav-link-inventory']}>
							Home
						</Link>
					</li>
				</ul>
				<h2 className={`${styles['nav-heading']} ${fonts.roboto700.className}`}>
					Products
				</h2>
				<ul className={styles['nav-ul']}>
					<li key={uuidv4()} className={styles.li}>
						<Link
							href=""
							className={styles['nav-link']}
							onClick={preventDefault}
						>
							Profile
						</Link>
					</li>
					<li key={uuidv4()} className={styles.li}>
						<Link
							href=""
							className={styles['nav-link']}
							onClick={preventDefault}
						>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
			)}
		</>
	);
};

export default Nav;
