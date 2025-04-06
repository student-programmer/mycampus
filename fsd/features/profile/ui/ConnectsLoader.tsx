import { Skeleton } from 'antd';
import style from './profile.module.scss';

export const ConnectsLoader = () => {
    return (
        <div className={ style.swiperContainer }>
            <div className={ style.profileWrapperMain }>
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
                            <Skeleton.Button active size="small"/>
                            <Skeleton.Avatar active size="small" shape="circle" className={ style.skeletonFlag }/>
                        </div>
                    </div>
                    <div className={ style.languageAndAgeInfo }>
                        <p className={ style.textPmain }>
                            <Skeleton.Input active size="small" className={ style.skeletonYear }/>
                        </p>
                        <p className={ style.textPmain }>•</p>
                        <Skeleton.Input active size="small" className={ style.skeletonYear }/>
                    </div>
                    <div className={ style.skeletonUniversityInfo }>
                        <Skeleton.Input active size="small"  className={ style.skeletonEducation }/>
                        <p className={ style.textPmain }>-</p>
                        <Skeleton.Input active size="small" className={ style.skeletonEducation }/>
                    </div>
                    <div className={ style.aboutPeople }>
                        <p className={ style.headerText }>About:</p>
                        <Skeleton.Input active block className={ style.skeletonAbout }/>
                    </div>
                    <div className={ style.interestsPeople }>
                        <p className={ style.headerText }>Interests:</p>
                        <div className={ style.interestsBlock }>
                            { [...Array(4)].map((_, i) => (
                                <Skeleton.Button
                                    key={ i }
                                    active
                                    size="small"
                                    shape="round"
                                    className={ style.skeletonInterestsBlocks }
                                />
                            )) }
                        </div>
                        <div className={ style.buttonsContainer }>
                            <Skeleton.Button active size={ 'small' } className={ style.buttonSkeletonSendProfile }/>
                            <Skeleton.Button active size={ 'small' } className={ style.buttonSkeletonViewProfile }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};