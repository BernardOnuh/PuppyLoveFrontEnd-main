import React, { useState } from 'react'
import featureicon from '../../assets/images/featureicon.svg'
import Linefeature from '../../assets/images/Linefeature.svg'
import propose1 from '../../assets/images/propose1.svg'
import propose2 from '../../assets/images/propose2.svg'
import propose3 from '../../assets/images/propose3.svg'
import propose4 from '../../assets/images/propose4.svg'
import propose5 from '../../assets/images/propose5.svg'
import propose6 from '../../assets/images/propose6.svg'
import propose7 from '../../assets/images/propose7.svg'
import propose8 from '../../assets/images/propose8.svg'
import { Collapse, Button } from '@material-tailwind/react';



export default function Features() {
      const [colapse, setcolapse] = useState(false)
      return (
            <>
                  <div className='max-w-[433px] mx-auto text-center p-8 pt-[64px] sm:pt-[96px] '>
                        <h2 className=' f-f-r-b font-medium text-xl lg:text-4xl text-primary  ' >
                              Features
                        </h2>
                        <img src={featureicon} className=' w-[80px] h-[80px] mx-auto mt-10 ' />
                        <h2 className=' f-f-sm text-xl text-white my-4 ' > $Puppylove HODL</h2>
                        <p className=' f-f-r text-tiny text-grey-light' >
                              PuppyLove is a rare gem at its infancy. Simply HODL your $PuppyLove bag and together we can make $PuppyLove great just like their parents -  $Doge, $Shiba, $Floki and many others.
                        </p>


                  </div>
                  <Collapse open={colapse} >
                        <div className=' w-[91%] xl:max-w-[1118px] mx-auto text-center ' >
                              <div className=' pt-[96px] ' >

                                    <h2 className=' f-f-sm text-xl lg:text-3xl text-primary text-center  ' >Proposed Features</h2>
                                    <h4 className=' f-f-m text-tiny lg:text-lg text-grey-dark text-center italic ' >(To be decided by the community)</h4>
                                    {/* inner grid started */}
                                    <div className=' grid grid-cols-12  gap-4 sm:gap-8 mt-10 ' >
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose1} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyStake</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose2} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyNFT</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose3} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyVerse</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose4} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyDEX</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose5} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyMerchandise</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose6} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyGameFI</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose7} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppySocialFI</h2>
                                                </div>

                                          </div>
                                          <div className='  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3   ' >

                                                <div className=' mt-4 sm:mt-0 mx-auto bg-black-vdark w-[260px] sm:w-full lg:w-[260px] h-[260px] p-[24px] rounded-[32px] text-center items-center ' >
                                                      <img src={propose8} className=' w-[81px] h-[80px] mx-auto mt-[21px] ' />
                                                      <h2 className=' f-f-m text-lg text-white py-[32px] ' >PuppyHUb</h2>
                                                </div>

                                          </div>
                                    </div>

                                    {/* inner grid ended */}
                              </div>
                        </div>
                  </Collapse>
                  <div className=' text-center ' >
                        <button onClick={() => setcolapse(!colapse)} className=' sm:mt-12 bg-white w-[176px] h-[46px] rounded-[39px] f-f-r-pr text-lg text-black   ' >
                              <ul className=' inline-flex items-center  ' >
                                    <li>
                                          {colapse ? " See less " : " See more"}

                                    </li>
                                    <li className=' ml-2 mt-1 ' >
                                          <svg className={` ${colapse ? " rotate-180 " : ""} `} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                    </li>
                              </ul>

                        </button>
                  </div>
                  <div className=' mb-[64px] sm:mb-[96px]' >
                        <img src={Linefeature} className=' w-full sm:w-11/12 xl:w-[985px] mx-auto h-[3px] sm:h-[2px] mt-8 sm:my-20 ' />
                  </div>

            </>
      )
}
