'use client'
import style from './ui/placeCardDesc.module.scss';
import { CampusReviews } from '@/fsd/shared/ui/CampusReviews/CampusReviews';
import { Contacts } from '@/fsd/shared/ui/Contacts/Contact';
import { Overview } from '@/fsd/shared/ui/Overview/Overview';
import { Divider, Rate } from 'antd';
import { Place } from '@/fsd/entities/places';
import Image from 'next/image';
import closeIcon from '../../../public/iconClose.svg';
import AdressIcon from '@/public/adressIcon';

const FullCardDetail = ({
                            place,
                            openDetail,
                            setOpenDetail,
                        }: {
    place: Place;
    openDetail: boolean;
    setOpenDetail: (v: boolean) => void;
}) => {
    // Значения по умолчанию, если данные из API отсутствуют
    const defaultPlace = {
        name: 'Название места',
        rating: 0,
        category: 'Категория',
        address: 'Адрес не указан',
        keywords: 'Ключевые слова не указаны',
        website: 'Сайт не указан',
        instagram: 'Instagram не указан',
        phoneNumber: 'Телефон не указан',
        workingHours: 'Часы работы не указаны',
        description: 'Описание отсутствует',
    };

    // Используем данные из API или значения по умолчанию
    const currentPlace = {
        name: place.name || defaultPlace.name,
        rating: place.rating || defaultPlace.rating,
        category: place.category || defaultPlace.category,
        address: place.address || defaultPlace.address,
        keywords: place.keywords || defaultPlace.keywords,
        website: place.website || defaultPlace.website,
        instagram: place.instagram || defaultPlace.instagram,
        phoneNumber: place.phoneNumber || defaultPlace.phoneNumber,
        workingHours: place.workingHours || defaultPlace.workingHours,
        description: place.description || defaultPlace.description,
    };

    // Разделяем keywords на массив для отображения
    const keywordsArray = currentPlace.keywords.split(',');
    const MAX_WORDS = 25;

    return (
        <div className={ style.placeDetail }>
            <div>
                <div className={ style.headerWrapper }>
                    <div className={ style.headerMainWrapper }>
                        <h2 className={ style.placeCardHeader }>{ currentPlace.name }</h2>
                        { openDetail && (
                            <Image
                                src={ closeIcon }
                                alt={ currentPlace.name }
                                onClick={ () => setOpenDetail(false) }
                            />
                        ) }
                    </div>
                    <div className={ style.restStars }>
                        <div className={ style.rateContainer }>
                            <Rate defaultValue={ currentPlace.rating } allowHalf disabled/>
                            <p className={ style.paragraphRate }>{ currentPlace.rating }</p>
                        </div>
                        <div className={ style.textContainer }>
                            <p className={ style.paragraphRate }>•</p>
                            <p className={ style.paragraphRate }>{ currentPlace.category }</p>
                        </div>
                    </div>
                </div>
                <div className={ style.adressContainer }>
                    <AdressIcon/>
                    <p className={ style.paragraphRate }>{ currentPlace.address }</p>
                </div>
                <div className={ style.keyWrapper }>
                    <p className={ style.keyHeader }>Key:</p>
                    <ul className={ style.keys }>
                        { keywordsArray.map((keyword, index) => (
                            <li className={ style.liKey } key={ index }>
                                { keyword.trim() }
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
            <div className={ style.contactsWrapper }>
                <h2 className={ style.contactsH2 }>Contacts:</h2>
                <Contacts
                    phoneNumber={ currentPlace.phoneNumber.length < MAX_WORDS ? currentPlace.phoneNumber : `${ currentPlace.phoneNumber.slice(0, MAX_WORDS)}...` }
                    instagram={ currentPlace.instagram.length < MAX_WORDS ? currentPlace.instagram : `${ currentPlace.instagram.slice(0, MAX_WORDS)}...` }
                    website={ currentPlace.website.length < MAX_WORDS ? currentPlace.website : `${ currentPlace.website.slice(0, MAX_WORDS)}...` }
                />
            </div>
            <div className={ style.hoursWrapper }>
                <p className={ style.hoursHeaderWrapper }>Opening hours:</p>
                <Divider className={ style.divider }/>
                <div className={ style.hoursWrapperMain }>
                    <p className={ style.timeText }>{ currentPlace.workingHours }</p>
                </div>
            </div>
            <Overview text={ currentPlace.description }/>
            <div className={ style.campusReviews }>
                <h2 className={ style.reviewCampusHeader }>Campus reviews:</h2>
                {/* Отзывы пока не реализованы в интерфейсе Place */ }
                <CampusReviews
                    date='2023-10-01'
                    name='Иван Иванов'
                    text='Отличное место!'
                />
            </div>
        </div>
    );
};

export default FullCardDetail;
