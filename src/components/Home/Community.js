import React from 'react'
import Cummnitypic from '../../assets/images/Cummnitypic.svg'
import Telegram from '../../assets/images/Telegram - Negative.svg'
import Twitter from '../../assets/images/Twitter - Original.svg'
import Dog from '../../assets/images/dog 3 1.svg'




export default function Community() {
  return (
    <div className=' relative sm:py-[96px] py-[64px]' >
      <div className=' w-[91%] lg:max-w-[785px] mx-auto  ' >
        <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary text-center  ' >
          Community
        </h2>
        <p className=' text-grey-dark f-f-m text-base text-center ' >
          Join the fast growing PuppyLove Army.
        </p>
        <div className=' grid grid-cols-12 gap-5  mt-[64px]  items-center' >
          <div className=' col-span-12 md:col-span-6 hidden md:block   ' >
            <img src={Cummnitypic} className=' w-[365px] h-[365px] ' />
          </div>
          <div className=' col-span-12 md:col-span-6   ' >
          
            <div className=' grid grid-cols-12 items-center gap-6  ' >
              <div className=' col-span-6   ' >
                <a href='https://t.me/PuppyLoveCoin' >
                  <div className=' text-center w-full md:w-[162px] h-[162px] rounded-[24px] p-[32px] bg-primary-vdark ' >
                    <img src={Telegram} className=' w-[48px] h-[48px] mx-auto ' />
                    <h2 className=' f-f-sm text-white text-lg mt-5 ' >Telegram</h2>
                  </div>
                </a>
              </div>
              <div className=' col-span-6   ' >
                <a href='https://twitter.com/PuppyLoveCoin' >
                  <div className=' text-center w-full md:w-[162px] h-[162px] rounded-[24px] p-[32px] bg-primary-vdark ' >
                    <img src={Twitter} className=' w-[48px] h-[48px] mx-auto ' />
                    <h2 className=' f-f-sm text-white text-lg mt-5 ' >Twitter</h2>
                  </div>
                </a>



              </div>

              {/* <div className=' col-span-12  ' >
                <div className=' mt-[11px] lg:mt-[60px] text-center  rounded-[24px] p-[32px] bg-primary-vdark  md:h-[133px]  items-center  ' >
                  <div className=' col-span-12 sm:col-span-6 text-center   ' >
                 
                    <div className=' grid grid-cols-12 items-center gap-6  ' >
                      <div className=' col-span-6   ' >
                        <h2 className=' f-f-sm text-white text-lg  ' >800k</h2>
                        <h4 className=' f-f-r text-tiny text-white mt-2 ' >Members</h4>

                      </div>
                      <div className=' col-span-6   ' >
                        <h2 className=' f-f-sm text-white text-lg  ' >548k</h2>
                        <h4 className=' f-f-r text-tiny text-white mt-2 ' >Followers</h4>

                      </div>
                    </div>
               

                  </div>
                </div>
              </div> */}
            </div>
            {/* inner grid ended */}
          </div>
          <div className=' col-span-12 md:col-span-6  md:hidden   ' >
            <img src={Cummnitypic} className=' w-full h-[365px] object-cover rounded-[24px] ' />
          </div>
        </div>
      </div>

      <img src={Dog} className=' w-[267px] h-[418px] absolute top-[100px] right-0 hidden 2xl:block ' />
    </div>
  )
}
