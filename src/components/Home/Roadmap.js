import React from 'react'
import Puppyroad from '../../assets/images/Puppy on road.svg'



export default function Roadmap() {
    return (
        <>
        
      <div className='py-[96px] ' >
        <div className=' w-[91%] xl:max-w-[1060px] mx-auto  text-center ' >
            <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary  ' >
                Roadmap
            </h2>
            <p className=' f-f-r-pr text-lg text-white-vlight  ' >
                What’s a project without a plan?
            </p>

            <div className=' grid grid-cols-12  items-center gap-4 sm:gap-8  pt-[84px] ' >
                <div className=' col-span-12 lg:col-span-6 mt-4 sm:mt-0   ' >
                    <div className=' bg-black-vdark w-full sm:w-[482px] mx-auto rounded-[32px] p-[32px] ' >
                        <h2 className=' f-f-m text-lg text-white-vlight ' >Phase 1</h2>
                        <h4 className=' f-f-sm text-primary  text-xl my-4 ' >Launch and Community Building</h4>
                        <div className=''  >
                            <ul className='  ' >
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Website and Social Media Launch
                                </li>
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Presale Event
                                </li>
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Community AMA Sessions
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' col-span-12 lg:col-span-6 mt-4 sm:mt-0   ' >
                    <div className=' bg-black-vdark w-full sm:w-[482px] mx-auto rounded-[32px] p-[32px] ' >
                        <h2 className=' f-f-m text-lg text-white-vlight ' >Phase 2</h2>
                        <h4 className=' f-f-sm text-primary  text-xl my-4 ' >Listing and Partnerships</h4>
                        <div className=''  >
                            <ul className='   ' >
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Listing on Major Exchanges
                                </li>
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Strategic Partnerships with Key Players in Crypto Space
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' col-span-12 lg:col-span-6 mt-4 sm:mt-0   ' >
                    <div className=' bg-black-vdark w-full sm:w-[482px] mx-auto rounded-[32px] p-[32px] ' >
                        <h2 className=' f-f-m text-lg text-white-vlight ' >Phase 3</h2>
                        <h4 className=' f-f-sm text-primary  text-xl my-4 ' >PuppyLove Ecosystem Expansion</h4>
                        <div className=''  >
                            <ul className='   ' >
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Vote On Various Proposed Features to Develop
                                </li>
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Innovators and Developers Drawn from Community or Human Population for its Individual Development.
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' col-span-12 lg:col-span-6 mt-4 sm:mt-0   ' >
                    <div className=' bg-black-vdark w-full sm:w-[482px] mx-auto rounded-[32px] p-[32px] ' >
                        <h2 className=' f-f-m text-lg text-white-vlight ' >Phase 4</h2>
                        <h4 className=' f-f-sm text-primary  text-xl my-4 ' >Global Adoption</h4>
                        <div className=''  >
                            <ul className='   ' >
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Outreach to New Markets
                                </li>
                                <li className=' f-f-r text-tiny text-grey-dark ' >
                                    Continued Development and Innovation of PuppyLove
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           
        </div>
        <img src={Puppyroad} className=' w-[998px] h-[289px] mx-auto mt-16 sm:mt-[-58px] object-cover ' />
        </div>
        </>
    )
}
