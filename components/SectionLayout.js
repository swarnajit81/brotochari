
const SectionLayout = ({title ,  classNames="" , children , props}) => {
  return (
     <div {...props} className={`relative   my-[3rem] w-full min-h-[400px] ${classNames} `}>
      <div className="absolute left-1/2 -translate-x-1/2  bg-accent_blue  max-w-[1200px] rounded-[25px] w-[90%] h-full">
        <h2 className="uppercase text-[4rem] lg:text-[9rem] text-center font-bold pt-[1rem] text-primary">
          {title}
        </h2>
      </div>
      {children}
      </div>
  )
}

export default SectionLayout