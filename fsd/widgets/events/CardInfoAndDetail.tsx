"use client";
import AdressIcon from "@/public/adressIcon";
import style from "./ui/eventDesc.module.scss";
import { Button, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { Event } from "@/fsd/entities/events";

const CardInfoAndDetail = ({
                               event,
                               openDetail,
                               setOpenDetail,
                           }: {
    event: Event;
    openDetail: boolean;
    setOpenDetail: (v: boolean) => void;
}) => {
    const dateInit = dayjs(event.date);
    const timeInit = dayjs().hour(20).minute(0).second(0);
    return (
        <div className={ style.eventsCardWrapper }>
            <div className={ style.headerWrapper }>
                <div className={ style.headerAndIcon }>
                    <h2 className={ style.eventsCardHeader }>{ event.name }</h2>
                    <div className={ style.eventsCardPrice }>{ event.price + " AED" || null }</div>
                </div>
                <p className={ style.paragraphRate }>{ event.category }</p>
                <div className={ style.adressContainer }>
                    <AdressIcon/>
                    <p className={ style.paragraphRate }>{ event.location }</p>
                </div>
            </div>
            <div className={ style.datePickers }>
                <DatePicker format="DD.MM.YYYY" disabled defaultValue={ dateInit }/>
                <TimePicker
                    disabled
                    defaultValue={ timeInit }
                    format="HH:mm"
                    hideDisabledOptions={ true }
                />
            </div>

            <Button
                type="primary"
                onClick={ () => setOpenDetail(true) }
                className={ style.buttonPlaceDetail }
            >
                Details
            </Button>
        </div>
    );
};

export default CardInfoAndDetail;
