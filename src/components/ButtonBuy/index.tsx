import styles from './style.module.scss';
import { fonts } from '@/assets/fonts';

type TProps = {
	text: string;
}

const ButtonBuy: React.FC<TProps> = ({text}:TProps)=> {
	return <button className={`${styles.btn} ${fonts.roboto700.className}`}>{text}</button>;
};

export default ButtonBuy;