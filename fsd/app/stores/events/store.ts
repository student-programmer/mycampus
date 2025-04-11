import { create } from "zustand/react";
import { Event, mockEvents } from "@/fsd/entities/events";
import eventActions from "@/actions/eventActions";


interface EventsState {
  eventsList: Event[];
  filteredEventsParams: any;
  setFilteredEventsParams: (params: any) => void;
  fetchAllEvents: () => Promise<void>;
}


export const useEventsStore = create<EventsState>((set) => ( {
  eventsList: [],
  filteredEventsParams: {},

  setFilteredEventsParams: (params: any) => {
    set({ filteredEventsParams: params });
  },

  fetchAllEvents: async () => {
    const data = await eventActions.getAllEvents();
    set({ eventsList: data || [] });
  }
} ))
