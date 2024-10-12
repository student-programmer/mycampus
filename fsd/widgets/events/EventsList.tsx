// src/app/events/page.tsx
'use client';

import { Breadcrumb, Button, Switch } from 'antd';
import { LeftOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import style from './ui/events.module.scss';
import { Event } from '../../entities/events/index';
import { mockEvents } from '../../entities/events/index';
import { useRouter } from 'next/navigation';
import EventCard from './EventsCard';
import { useState } from 'react';

const EventsPage = () => {
	const [nearToMe, setNearToMe] = useState(false);

	// Фильтр по близости (например, < 2 км)
	const filteredEvents: Event[] = nearToMe
		? mockEvents.filter(event => event.distance < 2)
		: mockEvents;

	return (
		<div className={style.eventsWrapper}>
			{/* Фильтр "Near to me" */}
			<div className={style.filterSection}>
				<Switch
					checked={nearToMe}
					onChange={() => setNearToMe(!nearToMe)}
					checkedChildren='Near to me'
					unCheckedChildren='All events'
				/>
			</div>
			<div className={style.swiperNavigation}>
				<button className={`swiper-button-up ${style.navigationButton}`}>
					<UpOutlined />
				</button>
			</div>

			{/* Вертикальный слайдер для событий */}
			<Swiper
				direction='vertical'
				slidesPerView={1}
				pagination={{ clickable: true }}
				navigation={{
					nextEl: '.swiper-button-down',
					prevEl: '.swiper-button-up',
				}}
				modules={[Navigation]}
				className={style.swiperContainer}
			>
				{filteredEvents.map((event: Event) => (
					<SwiperSlide key={event.id} className={style.slide}>
						<EventCard event={event} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className={style.swiperNavigation}>
				<button className={`swiper-button-down ${style.navigationButton}`}>
					<DownOutlined />
				</button>
			</div>
		</div>
	);
};

export default EventsPage;
