"use client";
import AdressIcon from "@/public/adressIcon";
import style from "./ui/eventDesc.module.scss";
import { Button, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import closeIcon from "../../../public/iconClose.svg";
import { Overview } from "@/fsd/shared/ui/Overview/Overview";
import { Contacts } from "@/fsd/shared/ui/Contacts/Contact";
import { Event } from "@/fsd/entities/events";

const FullInfoDetail = ({
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
        <div className={ style.eventsCardWrapperFull }>
            <div className={ style.headerWrapper } style={ {padding: "0 24px"} }>
                <div className={ style.headerAndIcon }>
                    <h2 className={ style.eventsCardHeader }>{ event.name }</h2>
                    <Image
                        src={ closeIcon }
                        alt={ event.name }
                        onClick={ () => setOpenDetail(false) }
                    />
                </div>
                <p className={ style.paragraphRate }>{ event.category }</p>
                <div className={ style.adressContainer }>
                    <AdressIcon/>
                    <p className={ style.paragraphRate }>{ event.location }</p>
                </div>
            </div>
            <div className={ style.datePickers } style={ {padding: "0 24px"} }>
                <DatePicker format="DD.MM.YYYY" disabled defaultValue={ dateInit }/>
                <TimePicker
                    disabled
                    defaultValue={ timeInit }
                    format="HH:mm"
                    hideDisabledOptions={ true }
                />
            </div>
            <div style={ {padding: '0 24px'} }>
                <Overview text={ event.description }/>
                <div className={ style.contactsWrapper }>
                    <h2 className={ style.contactsH2 }>Contacts:</h2>
                    <Contacts
                        phoneNumber={ event.contacts.phone }
                        instagram={ event.contacts.inst }
                        maps={ event.contacts.maps }
                        website={ event.contacts.web }
                    />
                </div>
            </div>
            <Button
                type="primary"
                onClick={ () => setOpenDetail(true) }
                className={ style.buttonBuyTicket }
            >
                <span>Buy tickets</span>
                <span>350 – 995 AED</span>
            </Button>
        </div>
    );
};

export default FullInfoDetail;
