import React from 'react'
import Heroimg from '../../assets/images/Hero-img.svg'
import kojaimg from '../../assets/images/kojaimg.svg'

export default function Koja() {
  return (
    <div className=' my-4 ' >
      <div className=' sm:w-[94.3%] xl:max-w-[1080px] mx-auto relative pt-[54px] sm:pt-0 sm:mt-[179px] mb-[80px]   ' >
        <img src={Heroimg} className=' w-full h-[988px] hidden sm:block ' />
        <img src={kojaimg} className=' w-full mx-auto h-[512px] sm:hidden  mt-72  ' />
        <div className=' absolute w-full top-[120px] md:top-[101px] lg:top-[87px] ' >


          <div className=' w-[94.3%] sm:w-10/12 md:w-7/12 lg:w-8/12 mx-auto text-center  ' >
            <h3 className=' f-f-sm text-4xl lg:text-5xl text-white leading-[60px]  sm:leading-[72px] ' >From the Land of Koja</h3>
            <h3 className=' f-f-m text-white text-xl lg:text-3xl py-5 sm:py-8 lg:py-0 lg:mt-0  ' >Puppies are coming to join humans.</h3>
            <h5 className=' f-f-m text-white text-base  pt-3 sm:pt-0 w-[322px] sm:w-full mx-auto ' >"Humans found them adorable, agreeing to adopt all the <br className='  hidden xl:block ' /> 600billion puppies, solely <br className=' sm:hidden' /> "For the Love of Puppies".</h5>
          </div>
        </div>

        {/* <div className=' text-center my-20  ' >
                    <button className=' f-f-sm text-base text-primary-dark w-[209px] h-[64px] bg-white rounded-[64px] ' >
                        <ul className=' inline-flex  items-center '  >
                            <li>
                            Whitepaper
                            </li>
                            <li className=' ml-3 ' >
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33325 14.1673L14.6666 5.83398" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33325 5.83398H14.6666V14.1673" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </li>
                        </ul>
                    </button>
                    </div> */}
      </div>
    </div>
  )
}
