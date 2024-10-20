import React from 'react'
interface Props {
	className?: string;
}
const SecondIcon = ({ className }: Props) => {
	return (
		<svg
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.30005 13.5C10.8 16 14.8 16 17.3 13.5M18.602 17.292C18.602 17.292 18.679 17.237 18.802 17.143C20.645 15.718 21.802 13.653 21.802 11.354C21.802 7.06797 17.772 3.58997 12.802 3.58997C7.832 3.58997 3.802 7.06797 3.802 11.354C3.802 15.642 7.832 19 12.802 19C13.226 19 13.922 18.972 14.89 18.916C16.152 19.736 17.994 20.409 19.606 20.409C20.105 20.409 20.34 19.999 20.02 19.581C19.534 18.985 18.864 18.03 18.604 17.291L18.602 17.292Z'
				stroke='currentColor'
				stroke-width='1.6'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default SecondIcon;