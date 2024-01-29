import React from 'react'
import Slider from "react-slick";
import partner1 from '../../assets/images/partner1.svg'
import partner2 from '../../assets/images/partner2.svg'
import partner3 from '../../assets/images/partner3.svg'
import partner4 from '../../assets/images/partner4.svg'
import partner5 from '../../assets/images/partner5.svg'
import partner6 from '../../assets/images/partner6.svg'
import partner7 from '../../assets/images/partner7.svg'
import partner8 from '../../assets/images/partner8.svg'
import partner9 from '../../assets/images/Pinksale.png'



export default function Partner() {
  const settings = {
    // dots: false,
    // arrows: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 8,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    speed: 2000,
    autoplaySpeed: 2000, // Set autoplaySpeed to 0 for continuous scrolling
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,

        }
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,

        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <div className=' w-[90%] mx-auto sm:py-[96px] py-[64px] text-center ' >
      <h2 className=' f-f-r-b font-medium  text-lg sm:text-xl md:text-4xl text-primary  ' >
        Partners/ PuppyLove Presence
      </h2>

      <Slider {...settings} className=' my-12 ' >
    <a href="">
        <div>
          <img src={partner1} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] ' />
        </div>
    </a>
        <div>
          <img src={partner2} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer ' />
        </div>
        <div>
          <img src={partner3} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer ' />
        </div>
      <a href="https://www.dexview.com/eth/0x798b581Afdba0fc5EC48E41B162FEfa6b69a8Fa2">
        <div>
          <img src={partner4} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer ' />
        </div>
      </a>
        <div>
          <img src={partner5} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer  ' />
        </div>
        <div>
          <img src={partner6} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer  ' />
        </div>
    <a href="https://github.com/solidproof/projects/blob/main/2024/PuppyLove%20coin/SmartContract_Audit_Solidproof_Puppylovecoin.pdf">
        <div>
          <img src={partner7} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer ' />
        </div>
    </a>
        <div>
          <img src={partner8} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer ' />
        </div>
    
    <a href="https://www.pinksale.finance/launchpad/0xb57072dBF8410F256f29526112d020aB306c5d73?chain=ETH">
        <div>
          <img src={partner9} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] cursor-pointer ' />
        </div>
    </a>
  {/* <div>
          <img src={partner2} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] ' />
        </div>
  <div>
          <img src={partner3} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] ' />
        </div>
        <div>
          <img src={partner4} className=' w-[90%] h-[162px] mx-auto  object-cover rounded-[24px] ' />
        </div>*/}
      </Slider>
    </div>
  )
}
