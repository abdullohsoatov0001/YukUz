import React from 'react'
import Header from './Components/Header/Header'
import Map from './Components/Sections/Map'
import InfoSections from './Components/Sections/InfoSections'
import img from './assets/Placeholder (1).png';
import img2 from './assets/Placeholder (2).png';
import { ArrowBigUp, ChessQueenIcon, Globe, LucideGitCompare, SeparatorVerticalIcon, TruckElectricIcon } from 'lucide-react';
import AppProgram from './Components/Sections/AppProgram';
import OpenInfo from './Components/Sections/OpenInfo';
import Footer from './Components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import PartnersSection from './Components/Sections/PartnersSection';
import Workflow from './Components/Sections/WorkFlow';

const App: React.FC = () => {
  const { t } = useTranslation()
  return <div>
    <Header />
    <main>
      <Map />
      <InfoSections />
      <InfoSections
        img={img}
        title={t('infoSections.title2')}
        info={t('infoSections.info2')}
        icon={<ArrowBigUp className='text-blue-500' />}
        iconText={t('infoSections.iconText2')}
        icon2={<Globe className='text-blue-500' />}
        icon2Text={t('infoSections.icon2Text2')}
        icon3={<LucideGitCompare className='text-blue-500' />}
        icon3Text={t('infoSections.icon3Text2')}
        button={t('infoSections.button2')}
        className='flex-row-reverse'
      />
      <InfoSections
        img={img2}
        title={t('infoSections.title3')}
        info={t('infoSections.info3')}
        icon={<TruckElectricIcon className='text-blue-500' />}
        iconText={t('infoSections.icon1Text3')}
        icon2={<ChessQueenIcon className='text-blue-500' />}
        icon2Text={t('infoSections.icon2Text3')}
        icon3={<SeparatorVerticalIcon className='text-blue-500' />}
        icon3Text={t('infoSections.icon3Text3')}
        button={t('infoSections.button3')}
      />
      <PartnersSection />
      <Workflow />
      <AppProgram />
      <OpenInfo />
    </main>
    <Footer />
  </div>
}

export default App