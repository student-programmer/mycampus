import React from 'react';
interface Props {
	className?: string;
}

const SendIcon = ({ className }: Props) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default SendIcon;
