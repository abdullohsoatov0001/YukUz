import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import imgBg from './../../assets/photo_2026-01-10_10-38-50.jpg';
import HeaderBtn from '../Childrens/HeaderBtn';
import "react-datepicker/dist/react-datepicker.css";
import imgReverse from './../../assets/Group 39308.png';
import { CalendarDaysIcon, Cuboid, LocationEditIcon, Search, Truck } from 'lucide-react';
import Input from '../Childrens/Input';
import DatePicker from 'react-datepicker';
import Button from '../Childrens/Button';
import InfoCard from '../Childrens/InfoCard';
import imgUsers from './../../assets/Users.png';
import imgVector from './../../assets/Vector.png';
import imgPack from './../../assets/Packages.png';
import imgtruck from './../../assets/Truck.png';
import imgVector2 from './../../assets/Vector2.png';
import imgVector3 from './../../assets/Vector3.png';

const Header: React.FC = () => {
    const [open, setOpen] = useState("load");
    const [date, setDate] = useState<Date | null>(null);
    const [dateTo, setDateTo] = useState<Date | null>(null);
    const [reverse, setReverse] = useState(false);

    return (
        <header>
            <Nav />
            <div
                style={{
                    backgroundImage: `url(${imgBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='bg-no-repeat h-190 max-md:h-200'
            >
                <h1 className='text-[32px] text-white text-center pt-30 font-bold max-md:pt-10'>
                    Convenient search for transportation
                </h1>
                <div className='justify-center m-auto mt-10 flex gap-6 max-md:mt-4'>
                    <div onClick={() => setOpen(open === "load" ? "" : "load")}>
                        <HeaderBtn text="Loads" className={open === "load" ? 'bg-white text-black' : "bg-black/50 text-white"} img={<Cuboid />} />
                    </div>
                    <div onClick={() => setOpen(open === "transport" ? "" : "transport")}>
                        <HeaderBtn className={open === "transport" ? 'bg-white text-black' : "bg-black/50 text-white"} text="Transports" img={<Truck />} />
                    </div>
                </div>
                {
                    open === "load" && (
                        <div className='flex justify-center mt-10 max-md:mt-4'>
                            <div className='flex items-center jusctify-between max-md:justify-center max-md:flex-wrap gap-2 '>
                                <div className='flex items-center justify-center max-md:flex-wrap  gap-0.5'>
                                    <div className='relative'>
                                        <Input placeholder={reverse ? "To" : "From"} icon={<LocationEditIcon className='text-gray-500 w-4 h-5' />}
                                            type='text'
                                            className='rounded-l-2xl max-md:w-full max-md:rounded-t-2xl max-md:rounded-tl-2xl max-md:rounded-l-none'
                                        />
                                        <button className='absolute w-8 bottom-4 left-53 z-10 cursor-pointer max-md:-bottom-2 max-md:rotate-90' onClick={() => setReverse(!reverse)}>
                                            <img src={imgReverse} alt="" />
                                        </button>
                                    </div>
                                    <Input placeholder={reverse ? "From" : "To"} icon={<LocationEditIcon className='text-gray-500 w-4 h-5 ' />}
                                        type='text'
                                        className='max-md:w-full'
                                    />
                                    <div className='relative'>
                                        <DatePicker selected={date} onChange={(d: Date | null) => setDate(d)}
                                            placeholderText='From date'
                                            className='bg-white max-md:w-full text-black  py-5 pl-12 w-full'
                                        />
                                        <CalendarDaysIcon className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 w-4 h-5' />
                                    </div>
                                    <div className='relative'>
                                        <DatePicker selected={dateTo} onChange={(d: Date | null) => setDateTo(d)}
                                            placeholderText='To date'
                                            className='bg-white text-black  max-md:rounded-r-none max-md:rounded-b-2xl  py-5 pl-12 w-full rounded-r-2xl'
                                        />
                                        <CalendarDaysIcon className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 w-4 h-5' />
                                    </div>
                                </div>
                                <Button
                                    className='py-5 text-center max-md:mt-2'
                                    text='Search'
                                    icon={<Search className='max-md:hidden' />}
                                />
                            </div>
                        </div>
                    )
                }
                {open === "transport" && (
                    <div className='flex justify-center '>
                        <h2 className='text-white absolute top-100 text-center text-2xl font-semibold'>
                            Transport search form coming soon...
                        </h2>
                    </div>

                )}
                <div className='flex justify-center max-md:gap-2 gap-6
                 mt-40 max-md:mt-10 max-md:flex-wrap max-md:justify-center
                 max-md:absolute max-md:px-5 max-md:left-5  max-md:-bottom-85
                 '>
                    <InfoCard img={imgUsers} title='Users' desc={1908} className=' bg-[#3B7CCC] max-md:w-27.25 ' img2={imgVector} />
                    <InfoCard img={imgPack} title='Loads' desc={234} img2={imgVector2} className='bg-[#5856D6] max-md:w-27.25 ' />
                    <InfoCard img={imgtruck} title='Transports' desc={450} img2={imgVector3} className='bg-[#34D19C] max-md:w-28.25 ' />
                </div>
            </div>
        </header>
    );
}

export default Header;
