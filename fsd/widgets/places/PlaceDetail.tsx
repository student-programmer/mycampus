'use client'
import { useRouter } from 'next/navigation';
import { mockPlaces } from '../../entities/places/index';
import { Place } from '../../entities/places/index';
import { Breadcrumb, Button } from 'antd';
import Image from 'next/image';
import style from './ui/placeDetails.module.scss';
import { useParams } from 'next/navigation';

const PlaceDetails = () => {
	const router = useRouter();
	const { id } = useParams();

	const place: Place | undefined = mockPlaces.find(p => p.id === id);

	if (!place) {
		return <p>Place not found</p>;
	}

	return (
		<div className={style.placeDetailsWrapper}>
			<Breadcrumb
				items={[{ title: 'Places', href: '/places' }, { title: place.name }]}
			/>
			<div className={style.placeDetails}>
				<Image
					src={place.image}
					alt={place.name}
					width={600}
					height={400}
					className={style.placeImage}
				/>
				<h1>{place.name}</h1>
				<p>{place.description}</p>
				<p>Адрес: {place.address}</p>
				<Button className={style.buttonInfo} onClick={() => router.back()} type='primary'>
					Back to Places
				</Button>
			</div>
		</div>
	);
};

export default PlaceDetails;
