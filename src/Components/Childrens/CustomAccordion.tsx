import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type FaqItem = {
    question: string;
    answer: string;
};

const CustomAccordion: React.FC = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqData: FaqItem[] = [
        {
            question: t("faq.q1.question"),
            answer: t("faq.q1.answer"),
        },
        {
            question: t("faq.q2.question"),
            answer: t("faq.q2.answer"),
        },
        {
            question: t("faq.q3.question"),
            answer: t("faq.q3.answer"),
        },
        {
            question: t("faq.q4.question"),
            answer: t("faq.q4.answer"),
        },
        {
            question: t("faq.q5.question"),
            answer: t("faq.q5.answer"),
        },
        {
            question: t("faq.q6.question"),
            answer: t("faq.q6.answer"),
        },
    ];

    const toggleIndex = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-230 w-full mx-auto p-4">
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className="mb-4 rounded-xl shadow-md border-gray-200 overflow-hidden w-full"
                >
                    <button
                        onClick={() => toggleIndex(index)}
                        className={`w-full flex justify-between items-center p-5 text-lg font-semibold text-gray-800 bg-white transition-colors ${activeIndex === index ? "bg-blue-50" : ""
                            }`}
                    >
                        {item.question}
                        <FiChevronDown
                            className={`text-gray-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                }`}
                            size={20}
                        />
                    </button>

                    <div
                        className="bg-blue-50 text-gray-600 text-base transition-all duration-700 w-full"
                        style={{ display: activeIndex === index ? "block" : "none" }}
                    >
                        <div className="p-5">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
