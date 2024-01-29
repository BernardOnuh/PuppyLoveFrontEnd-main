import React from 'react'
import Ethereum from '../../assets/images/Ethereum.svg'
import Buttoncopy from '../../assets/images/Buttoncopy.svg'
import binance from '../../assets/images/binance-coin-bnb-logo.svg'
import Buttoncopy2 from '../../assets/images/Buttoncopy2.svg'
import copy from 'clipboard-copy'


export default function Buypuppy() {
   const handleCopy = () => {
    const addressToCopy = "0x798b581Afdba0fc5EC48E41B162FEfa6b69a8Fa2"; // Replace with your actual address

    // Use clipboard-copy to copy the text to the clipboard
    copy(addressToCopy);

    // Optionally, provide some feedback to the user
    alert('Contract Address copied!! ' );
  };
    
  return (
    <>
      <div className='py-[64px] sm:py-[96px]' >
        <div className=' w-[91%]  sm:max-w-[644px] mx-auto  relative  text-center' >
          <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary  ' >
            Buy $PuppyLove
          </h2>
          <h3 className=' f-f-m text-tiny md:text-base text-white mt-8 mb-[64px] ' >$PuppyLove is not just a currency, it's a heart warming movement for self-empowerment of humans and support for puppies & human kids</h3>
        </div>
        <div className='w-[91%] xl:max-w-[1138px] mx-auto  bg-black-vdark rounded-[24px] px-[12px] py-[48px] sm:p-[48px]    ' >
          <h1 className=' f-f-sm text-xl text-white text-center '  >PuppyLove Contract address</h1>
          <div className='  lg:w-[644px] mx-auto  ' >
            <div className=' grid grid-cols-12  items-center gap-4 mt-8 ' >
              <div className=' col-span-12 sm:col-span-3 text-center sm:text-left ' >
                <button className=' bg-white-vdark w-[108px] h-[48px] rounded-[32px] f-f-b text-xl text-white   ' >
                  <ul className=' inline-flex items-center  ' >
                    <li>
                      <img src={Ethereum} className=' w-[24px] h-[24px] ' />
                    </li>
                    <li className=' ml-2 ' >

                      ETH
                    </li>
                  </ul>
                </button>
              </div>
              <div className=' col-span-12 sm:col-span-6 ' >
                <h2 className=' f-f-m text-base text-white text-center ' >0x798b....69a8Fa2</h2>
              </div>
              <div className=' col-span-12 sm:col-span-3 text-center sm:text-right ' >
                <button onClick={handleCopy} >
                  <img src={Buttoncopy} className=' w-[44px] h-[44px] ' />
                </button>
              </div>
             

            </div>


            <h2 className=' f-f-sm text-lg text-white text-center mt-7 ' >Token details</h2>
            {/* new grid started */}
            <div className=' grid grid-cols-12  items-center gap-2 mt-8 ' >
              {/* one */}
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny ' >
                  Ownership:
                </h2>
              </div>
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny text-right ' >
                  Renounced
                </h2>
              </div>
              {/* one end */}
              {/* one */}
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny ' >
                  Symbol
                </h2>
              </div>
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny text-right ' >
                  $PuppyLove
                </h2>
              </div>
              {/* one end */}
              {/* one */}
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny ' >
                  Price at Launch
                </h2>
              </div>
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny text-right ' >
                  TBD
                </h2>
              </div>
              {/* one end */}
              {/* one */}
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny ' >
                  Launch Market cap
                </h2>
              </div>
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny text-right ' >
                  TBD
                </h2>
              </div>
              {/* one end */}
              {/* one */}
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny ' >
                  Liquidity
                </h2>
              </div>
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny text-right ' >
                  Burned
                </h2>
              </div>
              {/* one end */}
              {/* one */}
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny ' >
                  Tax
                </h2>
              </div>
              <div className=' col-span-6  ' >
                <h2 className=' f-f-r text-white text-tiny text-right ' >
                  0% buy  |  5% sell
                </h2>
              </div>
              {/* one end */}


            </div>

            {/* new grid ended */}
            <h2 className='  f-f-r  text-tiny text-white text-center mt-6 ' >
            (NB: Sell tax goes towards Marketing.)
            </h2>

          </div>
        </div>
      </div>
    </>
  )
}
