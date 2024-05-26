import React from 'react'
import Logocontract from '../../assets/images/Logocontract.svg'
import vectorx from '../../assets/images/vectorx.svg'
import contractbg from '../../assets/images/Layer 2.png'
import contractbg2 from '../../assets/images/contract-bg-2.png'


export default function Contractpuppy() {
  return (
    <div className=' relative ' >
      <div className=' w-[91%] xl:max-w-[1512px] mx-auto sm:my-[96px] my-[64px] ' >
        <div className='max-w-[869px] mx-auto  text-center relative' >
          <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary  ' >
            $PuppyLove Contract Is Audited
          </h2>
          <p className=' text-grey-dark f-f-m text-tiny  sm:text-base mt-4 sm:mt-0 ' >
            To ensure safety of the community, $PuppyLove Contract is Audited and will continually be subjected to regular industry highest safety standards.
          </p>

          <div className=' cntrct-crd  rounded-[24px] p-[48px] my-20 ' >
          <div className='  text-center  ' >
                <img src={Logocontract} className=' w-[37px] h-[43px] mx-auto  ' />
                <h2 className=' f-f-b text-3xl text-white   mt-2 ' >Solidproof</h2>
                <h4 className=' f-f-r text-tiny text-white ' >16th December, 2023</h4>
              </div>
            <ul className=' mt-10 sm:inline-flex items-center' >
              
              <li>
              <a href='https://github.com/solidproof/projects/blob/main/2024/PuppyLove%20coin/SmartContract_Audit_Solidproof_Puppylovecoin.pdf ' className='' >
                <button class=" w-[238px] sm:w-[142px] h-[44px] rounded-[58px] bg-white text-primary-dark f-f-sm text-tiny ">
                  View report</button>
                  </a>
              </li>
              <li className=' mt-10 sm:mt-0 sm:ml-12   hover:bg-white w-[238px] h-[44px] rounded-[44px] items-center pt-[9px]  ' >
                {/* inner ul started */}
              <a href="https://twitter.com/solidproof_news/status/1751588940266578310">
                <ul className=' inline-flex items-center ' >
            
                  <li>
                    <img src={vectorx} className=' w-[20px] h-[18px] ' />
                  </li>
                  <li className=' ml-3 text-primary-dark f-f-sm text-tiny ' >
                    View announcement
                  </li>
                </ul>
                 </a>
                {/* inner ul ended */}
              </li>
            </ul>

          </div>

          <img src={contractbg} className=' hidden 2xl:block w-[561px] h-[407px] absolute bottom-[-94px] right-[-283px] z-[-10]  ' />
        </div>
      </div>
      <img src={contractbg2} className='  w-[303px] h-[347px] absolute bottom-[-94px] right-0 z-[-10]  sm:hidden ' />

    </div>
  )
}
