import React from 'react'
import img2 from './../../assets/Placeholder.png';
import { Truck, TruckElectricIcon, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type InfoProps = {
    img?: string,
    title?: string,
    info?: string,
    icon?: any,
    iconText?: string,
    icon2?: any,
    icon2Text?: string,
    icon3?: any,
    icon3Text?: string,
    button?: string,
    className?: string,
}

const InfoSections: React.FC<InfoProps> = ({ img, title, info, icon, iconText, icon2, icon2Text, icon3,
    icon3Text, button, className = "" }) => {

    const { t } = useTranslation();

    return (
        <section className={`flex justify-between max-md:flex-wrap max-md:px-4 max-md:justify-center gap-10 items-center max-w-280 mx-auto mt-25 ${className}`}>
            <img className='max-md:w-full' src={img || img2} alt="" />
            <div>
                <h3 className='text-[36px] font-bold'>{title || t('infoSections.title1')}</h3>
                <p className='mt-8'>{info || t('infoSections.info1')}</p>
                <div className='items-center  flex gap-4 mt-3'>
                    {icon || <TruckElectricIcon className='text-blue-500' />}
                    <p>{iconText || t('infoSections.icon1')}</p>
                </div>
                <div className=' items-center  flex gap-4 mt-3'>
                    {icon2 || <Video className='text-blue-500' />}
                    <p>{icon2Text || t('infoSections.icon2')}</p>
                </div>
                <div className='flex  gap-4 mt-3'>
                    {icon3 || <Truck className='text-blue-500' />}
                    <p>{icon3Text || t('infoSections.icon3')}</p>
                </div>
                <button className='bg-[#3B7CCC] cursor-pointer py-3 px-5 rounded-2xl text-white mt-8'>{button || t('infoSections.button1')}</button>
            </div>
        </section>
    )
}

export default InfoSections
