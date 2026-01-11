import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Stepper from '../Childrens/Stepper';
import StepCard from '../Childrens/StepCard';
import type { Step } from '../../Types/type';
import { useTranslation } from 'react-i18next';



const Workflow: React.FC = () => {
    const { t } = useTranslation();
    const steps: Step[] = [
        { id: 1, title: t('workflow.steps.1.title'), description: t('workflow.steps.1.description') },
        { id: 2, title: t('workflow.steps.2.title'), description: t('workflow.steps.2.description') },
        { id: 3, title: t('workflow.steps.3.title'), description: t('workflow.steps.3.description') }
    ];
    const [activeStep, setActiveStep] = useState(0);
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
                        <h2 className="mb-4 text-5xl font-bold text-gray-900">{t('workflow.title')}</h2>
                        <p className="mb-6 text-2xl font-semibold text-blue-500">{t('workflow.subtitle')}</p>
                        <p className="mb-12 text-lg leading-relaxed text-gray-600">{t('workflow.description')}</p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setShowModal(true)}
                            className="group flex w-fit items-start gap-4 rounded-2xl border-2 border-blue-500 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500 transition-transform duration-300 group-hover:scale-110">
                                <Play className="h-6 w-6 fill-white text-white" />
                            </div>
                            <div className="text-left">
                                <div className="mb-1 text-lg font-bold text-gray-900">{t('workflow.button.label')}</div>
                                <div className="text-sm text-gray-500">{t('workflow.button.description')}</div>
                            </div>
                        </motion.button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                        <div className="flex gap-6">
                            <Stepper steps={steps} activeStep={activeStep} />
                            <div className="flex-1 space-y-6">
                                {steps.map((step, index) => (
                                    <StepCard key={step.id} step={step} isActive={index === activeStep} onClick={() => setActiveStep(index)} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {showModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                                <Play className="mx-auto mb-4 h-20 w-20" />
                                <p className="text-xl font-semibold">{t('workflow.modal.title')}</p>
                                <p className="mt-2 text-gray-400">{t('workflow.modal.description')}</p>
                            </div>
                        </div>
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20">✕</button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
export default Workflow