"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlaceCard from "./PlaceCard";
import { Place } from "@/fsd/entities/places";
import style from "./ui/places.module.scss";
import { usePlacesStore } from "@/fsd/app/stores/places/store";
import FiltersForPlaces from "../FiltersForFeeds/FiltersForPlaces";

const PlacesDemo = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const swiperRef = useRef(null);

  const { placesList, fetchAllPlaces, filteredPlacesParams, setFilteredPlacesParams } = usePlacesStore();

  useEffect(() => {
    fetchAllPlaces();
  }, []);

  // Фильтрация мест
  const filteredPlaces = useMemo(() => {
    // Проверяем, все ли поля пустые
    const allFieldsEmpty = Object.values(filteredPlacesParams).every(value => 
      !value || (Array.isArray(value) && value.length === 0)
    );
    
    // Если все поля пустые, возвращаем весь список
    if (allFieldsEmpty) {
      return placesList;
    }

    // Иначе применяем фильтрацию
    return placesList.filter(place => {
      const matchesName = !filteredPlacesParams.name || 
        place.name.toLowerCase().includes(filteredPlacesParams.name.toLowerCase());
      
      const matchesKeywords = !filteredPlacesParams.keywords?.length || 
        filteredPlacesParams.keywords.some(keyword => 
          place.keywords.toLowerCase().includes(keyword.toLowerCase())
        );
      
      const matchesCategory = !filteredPlacesParams.category?.length || 
        filteredPlacesParams.category.some(category => 
          place.category.toLowerCase() === category.toLowerCase()
        );
      
      return matchesName && matchesKeywords && matchesCategory;
    });
  }, [placesList, filteredPlacesParams]);

  const resetFilters = () => {
    setFilteredPlacesParams({
      name: "",
      keywords: [],
      category: [],
    });
  };


  return (
    <div className={style.placesWrapper}>
      <div className={style.filtersWrapper}>
        <FiltersForPlaces resetFilters={resetFilters} />
      </div>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        ref={swiperRef}
        navigation={false}
        className={style.swiperContainer}
        allowTouchMove={!openDetail}
        watchOverflow
      >
        {filteredPlaces.map((place: Place) => (
          <SwiperSlide key={place.id} className={style.slide}>
            <PlaceCard
              place={place}
              openDetail={openDetail}
              setOpenDetail={setOpenDetail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlacesDemo;
