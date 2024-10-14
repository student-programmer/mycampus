import { Button, Breadcrumb } from "antd";
import Image from "next/image";
import { LeftOutlined } from "@ant-design/icons";
import { Place } from "../../entities/places/index";
import { useRouter } from "next/navigation";
import style from "./ui/placeCard.module.scss";
import usaIcon from '../../../public/usaICon.png';
import photoMen from '../../public/images/cinema-city.jpg';

const PlaceCard = ({ place }: { place: Place }) => {
  const router = useRouter();

  const moreInfo = () => {
    router.push(`/places/${place.id}`);
  };

  return (
		<div className={style.placeWrapper}>
			<div className={style.photoPlace}>
				<Image
					// src={place.image}
					src={photoMen}
					alt={place.name}
					width={290}
					height={200}
					className={style.placeImage}
				/>
				<div className={style.iconAndBreadcrumb}>
					<LeftOutlined className={style.LeftOutline} />
					<Breadcrumb
						style={{ color: '#fff' }} // Цвет текста Breadcrumb
						className={style.breadcrumbs}
						items={[{ title: 'Places' }, { title: place.name }]}
					>
						<Breadcrumb.Item>
							<span className={style.breadcrumbs}>Places</span>{' '}
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<span className={style.breadcrumbs}>{place.name}</span>{' '}
						</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</div>
			<div className={style.placeInfo}>
				<h2>{place.name}</h2>
				<p>Category: {place.category}</p>
				<p>Address: {place.address}</p>
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
