
type InfoCardProps = {
  img: string,
  title: string,
  desc: number,
  img2: string,
  className?: string,
}

const InfoCard = ({ img, title, desc, img2, className }: InfoCardProps) => {
  return (
    <div className={`text-white relative ${className} rounded-2xl max-md:p-2  p-4 w-56.75`}>
      <div className='flex items-center flex-wrap gap-4 max-md:gap-2 '>
        <img src={img} alt="" />
        <p  className='max-md:text-[14px] '>{title}</p>
      </div>
      <p className='text-[26px] mt-5'>{desc}</p>
      <img  className='absolute max-md:w-10 max-md:h-10 right-5 max-md:right-1 bottom-0' src={img2} alt="" />
    </div>
  )
}

export default InfoCard