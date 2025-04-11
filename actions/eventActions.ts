import eventService from '../service/eventsService';

const eventsActions = {
	getAllEvents: async () => {
		const [data, error] = await eventService.getAllEvents();

		if (error) {
			console.error('Ошибка при получении списка мероприятий:', error);
			return [];
		}

		return data;
	},

	getEventById: async (id: number) => {
		const [data, error] = await eventService.getEventById(id);

		if (error) {
			console.error(`Ошибка при получении мероприятия ${id}:`, error);
			return null;
		}

		return data;
	},
};

export default eventsActions;
