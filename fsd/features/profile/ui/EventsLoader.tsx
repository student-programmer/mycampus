import { Skeleton } from 'antd';
import style from './profile.module.scss';
import AdressIcon from "@/public/adressIcon";

export const EventsLoader = () => {
    return (
        <div className={ style.skeletonProfileWrapperMain }>
            <div className={ style.photoBack }>
                <Skeleton.Avatar active style={ {
                    width: "100%",
                    height: "120%",
                } } shape="square" className={ style.skeletonImage }/>
            </div>
            <div className={ style.mainCardInfo }>
                <div className={ style.headerProfile }>
                    <p className={ style.mainParagraphH1 }>
                        <Skeleton.Input active size="small" className={ style.skeletonName }/>
                    </p>
                    <div className={ style.countryWrapper }>
                        <Skeleton.Button active size="small" block/>
                    </div>
                </div>
                <div className={ style.languageAndAgeInfo }>
                    <p className={ style.textPmain }>
                        <Skeleton.Input active size="small" className={ style.skeletonYear }/>
                    </p>
                    <p className={ style.textPmain }>•</p>
                    <Skeleton.Input active size="small" className={ style.skeletonYear }/>
                </div>
                <div className={style.skeletonAddressContainer}>
                    <AdressIcon />
                    <Skeleton.Input active size="small" className={ style.skeletonYear }/>
                </div>
                <div className={ style.interestsPeople }>
                    <p className={ style.headerText }></p>
                    <div className={ style.buttonsContainer }>
                        <Skeleton.Button active size={ 'small' } className={ style.buttonSkeletonDatepicker } />
                        <Skeleton.Button active size={ 'small' } className={ style.buttonSkeletonDatepicker } />
                    </div>
                    <div className={ style.buttonsContainer }>
                        <Skeleton.Button active size={ 'small' } className={ style.buttonSkeletonSendProfile }/>
                    </div>
                </div>
            </div>
        </div>
    );
};