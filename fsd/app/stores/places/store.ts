import { create } from "zustand/react";
import { mockPlaces, Place } from "@/fsd/entities/places";


interface PlacesState {
    placesList: Place[];
}


export const usePlacesStore = create<PlacesState>((set) => ({
    placesList: mockPlaces,


}))