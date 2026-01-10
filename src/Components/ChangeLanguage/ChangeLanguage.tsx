import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguage: React.FC = () => {
    const languages = [
        { code: 'uz', label: 'UZ', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg' },
        { code: 'ru', label: 'RU', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/960px-Flag_of_Russia.svg.png' },
    ];


    const { i18n } = useTranslation();
    const [selected, setSelected] = useState(languages[0]);
    const [open, setOpen] = useState(false);

    const changeLang = (lang: typeof languages[0]) => {
        setSelected(lang);
        i18n.changeLanguage(lang.code); // 🔥 ВОТ ЭТО ГЛАВНОЕ
        setOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 border rounded-md"
            >
                <img className="w-8 h-6" src={selected.flag} />
                <span>{selected.label}</span>
            </button>

            {open && (
                <div className="absolute mt-1 w-full border rounded-md bg-white shadow">
                    {languages.map(lang => (
                        <div
                            key={lang.code}
                            onClick={() => changeLang(lang)}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <img className="w-8 h-6" src={lang.flag} />
                            <span>{lang.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChangeLanguage;
