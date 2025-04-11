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
	return (
		<div className={style.contactsWrapper}>
			<div className={style.containerContact}>
				<div className={style.constData}>
					<Image src={web} alt={''} />
					<p className={style.paragraphOpacity}>Website</p>
				</div>
				<p className={style.paragraphNoOpacity}>{website}</p>
			</div>
			<div className={style.containerContact}>
				<div className={style.constData}>
					<Image src={inst} alt={''} />
					<p className={style.paragraphOpacity}>Instagram</p>
				</div>
				<p className={style.paragraphNoOpacity}>{instagram}</p>
			</div>
			{maps && (
				<div className={style.containerContact}>
					<div className={style.constData}>
						<Image src={googleMaps} alt={''} />
						<p className={style.paragraphOpacity}>Google maps</p>
					</div>
					<p className={style.paragraphNoOpacity}>{maps}</p>
				</div>
			)}
			<div className={style.containerContact}>
				<div className={style.constData}>
					<Image src={phone} alt={''} />
					<p className={style.paragraphOpacity}>Phone</p>
				</div>
				<p className={style.paragraphNoOpacity}>{phoneNumber}</p>
			</div>
		</div>
	);
};
