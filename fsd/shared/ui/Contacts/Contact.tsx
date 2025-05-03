import style from './ui/contacts.module.scss';
import web from '../../../../public/web.svg';
import inst from '../../../../public/inst.svg';
import googleMaps from '../../../../public/maps.svg';
import phone from '../../../../public/phone.svg';
import Image from 'next/image';

type ContactsProps = {
    website: string | undefined;
    instagram: string | undefined;
    maps?: string | undefined;
    phoneNumber: string | undefined;
};

export const Contacts = ({
                             website,
                             instagram,
                             maps,
                             phoneNumber,
                         }: ContactsProps) => {

    const handleOpenWebsite = () => {
        if (website) {
            window.open(website)
        }
    }

    const handleOpenInstagram = () => {
        if (instagram) {
            window.open(instagram)
        }
    }

    const handleOpenMaps = () => {
        if (maps) {
            window.open(maps)
        }
    }

    return (
        <div className={ style.contactsWrapper }>
            <div className={ style.containerContact }>
                <div className={ style.constData } onClick={ handleOpenWebsite }>
                    <Image src={ web } alt={ '' }/>
                </div>
            </div>
            <div className={ style.containerContact }>
                <div className={ style.constData } onClick={ handleOpenInstagram }>
                    <Image src={ inst } alt={ '' }/>
                </div>
            </div>
            { maps && (
                <div className={ style.containerContact }>
                    <div className={ style.constData }>
                        <Image src={ googleMaps } alt={ '' } onClick={ handleOpenMaps }/>
                    </div>
                </div>
            ) }
            <div className={ style.containerContact }>
                <a href={ `tel:${ phoneNumber }` } className={ style.constData }>
                    <Image src={ phone } alt={ '' }/>
                </a>
            </div>
        </div>
    );
};
