import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Step } from './../../Types/type.ts'

interface StepCardProps {
    step: Step;
    isActive: boolean;
    onClick: () => void;
}

function StepCard({ step, isActive, onClick }: StepCardProps) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ x: 8 }}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${isActive ? 'border-2 border-blue-500' : 'border border-gray-200'
                }`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${isActive
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            {step.id}
                        </motion.div>
                        <div className={`text-sm font-semibold uppercase tracking-wider ${isActive ? 'text-blue-500' : 'text-gray-400'
                            }`}>
                            Step {step.id}
                        </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
                <div className={`mt-2 shrink-0 transition-transform duration-300 ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600'
                    }`}>
                    <ChevronRight className="h-6 w-6" />
                </div>
            </div>
        </motion.div>
    );
}
export default StepCard