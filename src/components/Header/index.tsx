import { useState } from 'react';
import styles from './style.module.scss';

const Header:React.FC = () => {
	const [showNave, setShowNave]= useState(false); 

	return (
		<header className={styles.header}>
			<div className={styles['header-wrapper']}>
				<button  onClick={()=> setShowNave(!showNave)} className={`${styles['btn-hambuguer']} ${showNave ? styles['nav-is-opened'] : styles['nav-is-closed']}`}>
					<img src='assets/btn-hamburger.svg'className={styles['img-hamburger']} alt='button hamburger'/>
					<img src='assets/btn-close.svg' className={styles['img-close']}  alt='button close'/>
				</button>
				<img src="/assets/logo-mobile.svg" className={styles['image-logo']} alt="logo" />        
				<img src="/assets/icon-remedy.svg" className={styles['icon-remedy']} alt="logo" />
			</div>         
		</header>
	);
};

export default Header;