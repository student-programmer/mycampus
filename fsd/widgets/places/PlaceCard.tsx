
import { Button, Breadcrumb } from 'antd';
import Image from 'next/image';
import { LeftOutlined } from '@ant-design/icons';
import { Place } from '../../entities/places/index';
import { useRouter } from 'next/navigation';
import style from './ui/placeCard.module.scss';

const PlaceCard = ({ place }: { place: Place }) => {
	const router = useRouter();

	const moreInfo = () => {
		router.push(`/places/${place.id}`);
	};

	return (
		<div className={style.placeWrapper}>
			<div className={style.photoPlace}>
				<Image
					src={place.image}
					alt={place.name}
					width={300}
					height={200}
					className={style.placeImage}
				/>
				<div className={style.iconAndBreadcrumb}>
					<LeftOutlined className={style.LeftOutline} />
					<Breadcrumb items={[{ title: 'Places' }, { title: place.name }]}>
						<p className={style.textP}>Places</p>
					</Breadcrumb>
				</div>
			</div>
			<div className={style.placeInfo}>
				<h2>{place.name}</h2>
				<p>Категория: {place.category}</p>
				<p>Адрес: {place.address}</p>
				<p>{place.description}</p>
				<Button
					className={style.moreInfoButton}
					type='primary'
					onClick={moreInfo}
				>
					More Info
				</Button>
			</div>
		</div>
	);
};

export default PlaceCard;
