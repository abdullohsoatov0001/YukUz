import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Step } from './../../Types/type.ts';

interface StepperProps {
    steps: Step[];
    activeStep: number;
}

function Stepper({ steps, activeStep }: StepperProps) {
    return (
        <div className="relative">
            <div className="absolute left-4.75 top-8 bottom-8 w-0.5 bg-gray-200"></div>

            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                    <div key={step.id} className="relative pb-8 last:pb-0">
                        <div className="flex items-center gap-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}
                                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white shadow-md ${isActive || isCompleted
                                    ? 'bg-blue-500'
                                    : 'bg-gray-300'
                                    }`}
                            >
                                {isCompleted ? (
                                    <Check className="h-5 w-5 text-white" />
                                ) : (
                                    <span className="text-sm font-bold text-white">{step.id}</span>
                                )}
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Stepper