// src/app/events/EventCard.tsx
import { Breadcrumb, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Image from 'next/image';
import style from './ui/events.module.scss';
import usaIcon from '../../public/usaICon.png'; // Можно заменить на другой значок или убрать.
import { Event } from '@/fsd/entities/events';
import { useRouter } from 'next/navigation';
import photoMen from '../../public/images/cinema-city.jpg';

interface EventCardProps {
	event: Event;
	
}

const EventCard = ({ event }: EventCardProps) => {
    const router = useRouter()
      const moreInfo = (id: string) => {
				router.push(`/events/${id}`);
			};
	return (
		<div className={style.eventCard}>
			<Image src={photoMen} alt={event.name} width={290} height={250} />
			<div className={style.eventDetails}>
				<h3>{event.name}</h3>
				<p>{event.description}</p>
				<p>Distance: {event.distance} km</p>
				<p>{event.location}</p>
				<p>{event.date}</p>
				<Button
					className={style.moreInfoButton}
					type='primary'
					onClick={() => moreInfo(event.id)}
				>
					More Info
				</Button>
			</div>
		</div>
	);
};

export default EventCard;