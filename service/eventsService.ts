import axiosInstance from '@/plugins/axios';
import { Event } from '@/fsd/entities/events';

const eventService = {
	// Получить все места
	getAllEvents: async (): Promise<[Event[] | null, any]> => {
		try {
			const { data } = await axiosInstance.get('events');
			return [data, null];
		} catch (error) {
			console.error('Ошибка при получении списка мест:', error);
			return [null, error];
		}
	},

	// Получить место по ID
	getEventById: async (id: number): Promise<[Event | null, any]> => {
		try {
			const { data } = await axiosInstance.get(`events/${id}`);
			return [data, null];
		} catch (error) {
			console.error(`Ошибка при получении места ${id}:`, error);
			return [null, error];
		}
	},
};

export default eventService;
