import { create } from "zustand/react";
import { Event, mockEvents } from "@/fsd/entities/events";


interface EventsState {
    eventsList: Event[];
    filteredEventsParams: any;
    setFilteredEventsParams: (params: any) => void;
}


export const useEventsStore = create<EventsState>((set) => ({
    eventsList: mockEvents,
    filteredEventsParams: {},

    setFilteredEventsParams: (params: any) => {
        set({ filteredEventsParams: params });
    }

}))