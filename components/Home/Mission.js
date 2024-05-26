import React from 'react'
import single from '../../assets/images/single puppy 1.svg'



export default function Mission() {
  return (
    <div className=' relative  py-[96px] ' >
      <div className=' w-[91%] xl:max-w-[1138px] mx-auto text-center bg-black-vdark rounded-[24px] py-[64px] px-[12px]  sm:px-[32px] sm:py-[32px]    relative mt-10 sm:mt-20   ' >
        <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary   ' >
          PuppyLove Mission
        </h2>
        <p className=' f-f-m  text-base text-white pt-[48px] lg:pt-[20px] ' >
          Through humans Innovative developers and strong community, PuppyLove aims to standout as a truly people's long-term project for self-empowerment and support for puppies and human kids as it contributes to growth and development of blockchain and cryptocurrency with its cutting-edge blockchain utilities.
        </p>
      </div>

      <img src={single} className=' w-[294px] h-[418px]  mx-auto relative z-10 mt-[-68px] sm:mt-[-48px] 3xl:mt-0 ' />
    </div>
  )
}
