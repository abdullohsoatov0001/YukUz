type HeaderBtnProps = {
    text: string
    img: any,
    className?: string
}

const HeaderBtn = ({ text, className, img }: HeaderBtnProps) => {
    return (
        <button className={`${className}
         flex items-center gap-4 p-2 cursor-pointer rounded-lg
        `}>
            <div> {img}</div >
            <p className=" text-[18px]">{text}</p>
        </button >


    )
}

export default HeaderBtn