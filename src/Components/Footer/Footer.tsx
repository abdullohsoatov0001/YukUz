import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Logo from './../../assets/Logo (for light background).png';
import logos from './../../assets/Frame 38122.png';
import apple from './../../assets/appstore.png';
import googleplay from './../../assets/googleplay.png';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';

const Footer: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div>
            <footer className='bg-[#F6F9FF] pt-18.75 flex justify-center'>
                <div>
                    <div>
                        <div className='max-w-352 w-full flex max-md:flex-wrap gap-17.5 justify-between max-sm:pl-8'>

                            <div>
                                <img src={Logo} className='mb-11' alt="" />
                                <img src={logos} alt="" />
                            </div>
                            <div className='flex flex-wrap gap-9 max-sm:mt-11 max-sm:w-75 '>
                                <ul className='text-[#2E5A81]'>
                                    <h2 className='text-lg text-[#182F43] font-bold mb-4.75'>{t('footer.navigation')}</h2>
                                    <li>{t('footer.nav.loads')}</li>
                                    <li className='my-3.25'>{t('footer.nav.map')}</li>
                                    <li className='mb-3'>{t('footer.nav.carriers')}</li>
                                    <li>{t('footer.nav.partners')}</li>
                                </ul>
                                <ul className='text-[#2E5A81]'>
                                    <h2 className='text-lg text-[#182F43] font-bold mb-4.75'>{t('footer.security')}</h2>
                                    <li>{t('footer.security_links.account')}</li>
                                    <li className='my-3.25'>{t('footer.security_links.faq')}</li>
                                    <li className='mb-3'>{t('footer.security_links.terms')}</li>
                                    <li>{t('footer.security_links.privacy')}</li>
                                </ul>
                                <ul>
                                    <h2 className='text-lg text-[#182F43] font-bold mb-4.75'>{t('footer.reach_us')}</h2>
                                    <li className='flex gap-2.5 items-center text-[#007AFF] font-bold text-sm'><BsTelephone /> {t('footer.phone')}</li>
                                    <li className='flex gap-2.5 items-center my-4 text-[#007AFF] font-bold text-sm'><MdOutlineMailOutline /> {t('footer.email')}</li>
                                    <li className='flex gap-2.5 max-w-54.25 items-center text-[#007AFF] font-bold text-sm'><GrLocation className='w-6 h-8' /> {t('footer.address')}</li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <h2 className='mb-3 text-[#182F43] font-bold'>{t('footer.download')}</h2>
                                <div className='flex flex-wrap gap-4 max-sm:w-75'>
                                    <img src={googleplay} alt="" />
                                    <img src={apple} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border-t border-[#E5E5EA] mt-7.5 pt-5 flex flex-wrap justify-between items-center max-sm:px-4'>
                        <p className='text-[#182F43]'>{t('footer.copyright')}</p>
                        <ChangeLanguage />
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer
