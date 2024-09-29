export interface Event {
	id: string;
	name: string;
	description: string;
	date: string; // Дата события
	location: string; // Адрес
	distance: number; // Расстояние в километрах
	image: string;
	category: string;
}
