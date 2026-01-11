import React from 'react'
import apple from './../../assets/appstore.png';
import googleplay from './../../assets/googleplay.png';
import phons from './../../assets/Frame 48096405.png';
import { useTranslation } from 'react-i18next';

const AppProgram: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className='w-full h-168 flex justify-center items-center'>
                <div className='w-full max-w-280 bg-[#181D27] text-white flex items-end pl-16 gap-25 rounded-[25px] shadow-xl max-sm:gap-8 max-sm:pl-4 max-sm:w-85.75 max-sm:flex-wrap '>

                    <div className='py-9 max-w-108 '>
                        <h2 className='text-[32px] font-bold mb-2 max-sm:text-[24px]'>
                            {t('appProgram.title')}
                        </h2>

                        <p className='text-lg mb-10 max-sm:text-sm'>
                            {t('appProgram.description')}
                        </p>

                        <button className='py-2.5 px-4 bg-white text-black font-bold rounded-md mb-16 max-sm:mb-8 max-sm:hidden'>
                            {t('appProgram.explore')}
                        </button>

                        <div>
                            <h2 className='text-[#E9EAEB] text-sm mb-2.5'>
                                {t('appProgram.download')}
                            </h2>

                            <div className='flex flex-wrap justify-between w-full max-w-95.5 max-sm:w-78'>
                                <a href="#">
                                    <img src={apple} alt="appleStore" className='max-sm:w-37.75 max-sm:h-10.75' />
                                </a>
                                <a href="#">
                                    <img src={googleplay} alt="GooglePlay" className='max-sm:w-37.7 max-sm:h-10.75' />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>
                        <img src={phons} alt="phon" className='max-sm:w-56.50 max-sm:h-57.5' />
                    </div>

                </div>
            </section>
        </>
    )
}

export default AppProgram;
