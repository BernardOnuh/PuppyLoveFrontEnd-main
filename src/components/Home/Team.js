import React from 'react'
import Teamimage from '../../assets/images/Teamimage.svg'

export default function Team() {
  return (
    <div className='w-[91%] 2xl:w-[1207px] mx-auto py-[96px]   ' >
    <h2 className='  text-4xl text-primary  f-f-r-b  font-medium text-center ' >TEAM</h2>
<div className=' grid grid-cols-12  items-center xl:gap-[64px]  pt-[64px]   ' >
<div className=' col-span-12 xl:col-span-4 hidden xl:block    ' >
                  <img src={Teamimage} className=' w-[436px] h-[436px] lg:w-[443px] lg:h-[433px] mx-auto xl:ml-0 '  />
                </div>
                <div className=' col-span-12 xl:col-span-8    ' >
            
        <h4 className=' f-f-r   leading-[41px] sm:leading-[50px]  text-base lg:text-xl  text-white  text-center xl:text-start  ' >With Renouncement and Liquidity burnt, <span className='  f-f-sm text-primary-light  ' >PuppyLove </span> is fully community owned until the community decides  on individuals to represent the project and vote On Various Proposed Features to Develop, with Innovators and Developers Drawn from Community or Human Population for its Individual Development.</h4>
                  </div>
                  <div className=' col-span-12 xl:col-span-4 xl:hidden mt-[64px]   ' >
                  <img src={Teamimage} className=' w-[343px] h-[343px] sm:w-[436px] sm:h-[436px] lg:w-[443px] lg:h-[433px] mx-auto xl:ml-0 '  />
                </div>
              </div>

        
    </div>
  )
}
