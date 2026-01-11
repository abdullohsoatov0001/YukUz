import React from 'react'
import CustomAccordion from '../Childrens/CustomAccordion'
import { useTranslation } from 'react-i18next';

const OpenInfo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className='w-full h-234.25 flex justify-center items-center'>
            <div className='w-full max-w-230'>

                <div className='text-center flex justify-center flex-wrap'>
                    <h2 className='text-[38px] text-[#182F43] font-semibold mb-8 max-sm:mb-4.25 max-sm:text-[24px]'>
                        {t('openInfo.title')}
                    </h2>

                    <p className='max-w-175.5 text-[22px] text-[#182F43] max-sm:text-sm'>
                        {t('openInfo.description')}
                    </p>
                </div>

                <div className='flex flex-wrap w-full max-w-230 justify-center mt-12.5 max-sm:mt-4'>
                    <CustomAccordion />
                </div>

            </div>
        </section>
    )
}

export default OpenInfo
