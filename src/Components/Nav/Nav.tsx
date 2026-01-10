import React from 'react'
import img from './../../assets/Logo (for light background).png';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import { useTranslation } from 'react-i18next';
import Button from '../Childrens/Button';
import imgMenu from './../../assets/menu-left.png';
const Nav: React.FC = () => {
    const { t } = useTranslation()

    return <nav className='flex justify-between items-center max-w-280 mx-auto py-6 max-md:px-4'>
        <div className='flex items-center gap-4'>
            <img className='hidden max-md:block' src={imgMenu} alt="" />
            <img src={img} alt="" />
        </div>
        <ul className='flex gap-10 max-md:hidden'>
            <li className='text-[22px] '>Documentation</li>
            <li className='text-[22px] '>Pricing</li>
            <li className='text-[22px] '>FAQ</li>
            <li className='text-[22px] '>Contact</li>
        </ul>
        <div className='flex gap-5 items-center'>
            <ChangeLanguage />
            <Button text={"Kirish"} />
        </div>

    </nav>

}

export default Nav