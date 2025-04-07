interface Props {
	className?: string;
}

export const LeftPageIcon = ({ className }: Props) => {
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
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

