import { motion } from 'framer-motion'
import one from './../../assets/L_height-removebg-preview.png'
import two from './../../assets/Group 2085660477.png'
import three from './../../assets/image 17.png'
import four from './../../assets/image 43.png'
import five from './../../assets/logo-colored.png'
import background from './../../assets/Rectangle 34624238.png'
import { useTranslation } from 'react-i18next'

const PartnersSection: React.FC = () => {
  const { t } = useTranslation()

  const partners = [
    { id: 1, icon: one, label: t('partners.logos.1'), scale: 1.5 },
    { id: 2, icon: two, label: t('partners.logos.2') },
    { id: 3, icon: three, label: t('partners.logos.3') },
    { id: 4, icon: four, label: t('partners.logos.4') },
    { id: 5, icon: five, label: t('partners.logos.5') },
  ]

  return (
    <section className="relative mx-auto mt-20 min-h-125 max-w-350 overflow-hidden rounded-[30px]">
      
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-6 text-5xl font-bold text-white">
            {t('partners.title')}
          </p>
          <p className="max-w-3xl text-lg text-white/80">
            {t('partners.description')}
          </p>
        </motion.div>

       <div className="relative">
        <div className="flex gap-8 overflow-x-auto pb-10 pr-10 scroll-smooth partners-scroll">

            {partners.map((partner, index) => (
            <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="group relative min-w-[280px] max-w-[280px] aspect-[4/3] cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
                <div className="flex h-full items-center justify-center p-8">
                <img
                    src={partner.icon}
                    alt={partner.label}
                    style={{ transform: `scale(${partner.scale || 1})` }}
                    className="max-h-20 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                </div>
            </motion.div>
            ))}

        </div>
        </div>

      </div>
    </section>
  )
}

export default PartnersSection
