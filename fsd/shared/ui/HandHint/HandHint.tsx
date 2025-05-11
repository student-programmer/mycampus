import style from './ui/handHint.module.scss';
import hand from '../../../../public/hand-swipe.png';
import { Image } from 'antd';

const HandHint = () => (
	<div className={style.handHintWrapper}>
		{' '}
		<Image
			// src={ hand }
			src='/hand-swipe.png'
			alt='Scroll down hint'
			className={style.handImage}
			width={120}
			height={80}
		/>{' '}
	</div>
);
export default HandHint;
