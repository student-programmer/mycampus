'use client'
import { Button, Rate } from 'antd';
import Image from 'next/image';
import { Place } from '@/fsd/entities/places';
import style from './ui/placeCardDesc.module.scss';
import closeIcon from '../../../public/iconClose.svg';

export const PlaceCardDescription = ({
	place,
	openDetail,
	setOpenDetail,
	needButton,
}: {
	place: Place;
	openDetail: boolean;
	setOpenDetail: (v: boolean) => void;
	needButton: boolean;
}) => {
	// Значения по умолчанию, если данные из API отсутствуют
	const defaultPlace = {
		name: 'Название места',
		rating: 0,
		category: 'Категория',
		address: 'Адрес не указан',
		area: 'Area doesnt match',
		keywords: 'Ключевые слова не указаны',
	};

	// Используем данные из API или значения по умолчанию
	const currentPlace = {
		name: place.name || defaultPlace.name,
		rating: place.rating || defaultPlace.rating,
		category: place.category || defaultPlace.category,
		area: place.area || defaultPlace.area,
		address: place.address || defaultPlace.address,
		keywords: place.keywords || defaultPlace.keywords,
	};

	// Разделяем keywords на массив для отображения
	const keywordsArray = currentPlace.keywords.split(',');

	return (
		<div className={style.placeCardWrapper}>
			<div className={style.headerWrapper}>
				<div className={style.headerMainWrapper}>
					<h2 className={style.placeCardHeader}>{currentPlace.name}</h2>
					{openDetail && (
						<Image
							src={closeIcon}
							alt={currentPlace.name}
							onClick={() => setOpenDetail(false)}
						/>
					)}
				</div>
				<div className={style.restStars}>
					<div className={style.rateContainer}>
						<Rate defaultValue={currentPlace.rating} allowHalf disabled />
						<p className={style.paragraphRate}>{currentPlace.rating}</p>
					</div>
					<div className={style.textContainer}>
						<p className={style.paragraphRate}>•</p>
						<p className={style.paragraphRate}>{currentPlace.category}</p>
					</div>
				</div>
			</div>
			<div className={style.areaContainer}>
				{/*<div>Area: {currentPlace.area}</div>*/}
				{ " " }
			</div>
			<div className={style.keyWrapper}>
				<p className={style.keyHeader}>Key:</p>
				<ul className={style.keys}>
					{keywordsArray.map((keyword, index) => (
						<li className={style.liKey} key={index}>
							{keyword.trim()}
						</li>
					))}
				</ul>
			</div>
			{!openDetail && needButton && (
				<Button
					type='primary'
					onClick={() => setOpenDetail(true)}
					className={style.buttonPlaceDetail}
				>
					Place details
				</Button>
			)}
		</div>
	);
};
