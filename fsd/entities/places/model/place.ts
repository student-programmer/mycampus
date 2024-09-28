export interface Place {
	id: string;
	name: string;
	description: string;
	address: string;
	distance: number; // Расстояние от пользователя (для фильтра "near to me")
	image: string;
	category: string; // Например: ресторан, клуб, кинотеатр и т.д.
}
