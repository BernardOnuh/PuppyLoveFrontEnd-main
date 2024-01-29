import React from 'react'
import LogArtboard from '../../assets/images/LogArtboard 56.svg'

export default function Tokenomics() {
  return (
    <div className='w-[91%] xl:max-w-[1080px] mx-auto relative mt-[64px] sm:mt-[96px] text-center   ' >
                <div className=' max-w-[838px] mx-auto  ' >
            <h3 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary '  >Tokenomics</h3>
            <p className=' text-grey-light f-f-m text-tiny md:text-lg mt-[64px] ' >
            PuppyLove Tokenomics demonstrates its vision and goal, a meme token that is more than a meme
            </p>
            <p className=' text-grey-light f-f-m text-tiny md:text-lg mt-6 ' >
            $PuppyLove is designed to be deflationary. 40% of total supply will be burned at launch.
            </p>
<a href="https://etherscan.io/tx/0x3ea670a050fdc01c233c55ef801964b705b85b213d5b4dc0223bc1d3febbcdfc">
           <button className=' my-8 w-[162px] h-[52px] rounded-[58px] bg-white text-primary-dark f-f-sm text-tiny ' >
           Burn details
           </button>
    </a>
            </div>
            <img src={LogArtboard} className=' hidden md:block w-[154px] h-[154px] lg:w-[184px] lg:h-[184px] 3xl:w-[248px] 3xl:h-[248px]  absolute top-[-70px] lg:top-[-51px] 3xl:top-[-47px] right-[-34px] 3xl:right-[-129px]   '  />
    </div>
  )
}
