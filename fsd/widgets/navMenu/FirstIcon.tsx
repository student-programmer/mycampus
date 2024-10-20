import React from 'react';
interface Props {
	className?: string;
}

const FirstIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M20.1 12.5721L12.6 20.0001L5.10003 12.5721C4.60534 12.0907 4.21567 11.5121 3.95558 10.8727C3.69549 10.2333 3.57059 9.54701 3.58877 8.85699C3.60695 8.16697 3.7678 7.48819 4.06119 6.86339C4.35458 6.23859 4.77417 5.68131 5.29352 5.22663C5.81287 4.77196 6.42074 4.42974 7.07884 4.22154C7.73695 4.01333 8.43104 3.94364 9.1174 4.01686C9.80376 4.09007 10.4675 4.30461 11.0669 4.64696C11.6663 4.98931 12.1883 5.45205 12.6 6.00605C13.0136 5.45608 13.5362 4.99738 14.1351 4.65866C14.7341 4.31994 15.3965 4.1085 16.081 4.03757C16.7654 3.96665 17.4571 4.03775 18.1128 4.24645C18.7685 4.45514 19.3741 4.79693 19.8916 5.25042C20.4091 5.70391 20.8275 6.25934 21.1205 6.88195C21.4134 7.50456 21.5748 8.18094 21.5943 8.86876C21.6139 9.55659 21.4913 10.241 21.2342 10.8793C20.977 11.5176 20.5909 12.0959 20.1 12.5781M12.5999 6L9.30695 9.293C9.11948 9.48053 9.01416 9.73484 9.01416 10C9.01416 10.2652 9.11948 10.5195 9.30695 10.707L9.84995 11.25C10.5399 11.94 11.6599 11.94 12.3499 11.25L13.3499 10.25C13.9467 9.65327 14.756 9.31803 15.5999 9.31803C16.4439 9.31803 17.2532 9.65327 17.8499 10.25L20.0999 12.5M13.1 15.5L15.1 17.5M15.6 13L17.6 15'
				stroke='currentColor'
				stroke-width='1.6'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default FirstIcon;
