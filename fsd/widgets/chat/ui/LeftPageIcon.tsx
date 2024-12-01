import React from 'react';
interface Props {
	className?: string;
}

const LeftPageIcon = ({ className }: Props) => {
	return (
		<svg
			width='16'
			height='14'
			viewBox='0 0 16 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 7H15M1 7L7 13M1 7L7 1'
				stroke='white'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default LeftPageIcon;
