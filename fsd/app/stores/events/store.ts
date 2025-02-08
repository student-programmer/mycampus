import { create } from "zustand/react";
import { Event, mockEvents } from "@/fsd/entities/events";


interface EventsState {
    eventsList: Event[];
}


export const useEventsStore = create<EventsState>((set) => ({
    eventsList: mockEvents,


}))