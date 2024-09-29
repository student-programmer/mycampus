'use client';

import { useParams } from 'next/navigation';
import { mockEvents } from '../../entities/events/index';
import { useState, useEffect } from 'react';
import { Event } from '../../entities/events/index';
import Image from 'next/image';
import style from './ui/eventDetail.module.scss';

const EventDetail = () => {
	const { id } = useParams();
	const [event, setEvent] = useState<Event | null>(null);

	useEffect(() => {
		const foundEvent = mockEvents.find(event => event.id === id);
		setEvent(foundEvent || null);
	}, [id]);

	if (!event) {
		return <div>Event not found</div>;
	}

	return (
		<div className={style.eventDetailWrapper}>
			<Image
				src={event.image}
				alt={event.name}
				width={800}
				height={400}
				className={style.eventDetailImage}
			/>
			<div className={style.eventDetailInfo}>
				<h1>{event.name}</h1>
				<p>{event.description}</p>
				<p>
					<strong>Date:</strong> {event.date}
				</p>
				<p>
					<strong>Location:</strong> {event.location}
				</p>
				<p>
					<strong>Distance:</strong> {event.distance} km
				</p>
				<p>
					<strong>Category:</strong> {event.category}
				</p>
			</div>
		</div>
	);
};

export default EventDetail;
