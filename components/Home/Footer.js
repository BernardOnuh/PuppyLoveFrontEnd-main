import React from 'react'
import Telegram from '../../assets/images/Telegram - Negative.svg'
import Twitter from '../../assets/images/Twitter - Original.svg'


export default function Footer() {
  return (
    <div className="w-[91%] lg:max-w-[1095px] mx-auto my-[32px]  text-center">


      <ul className=' inline-flex items-center ' >
        <li>
          <a href='https://t.me/PuppyLoveCoin' >
            <img src={Telegram} className=' w-[32px] h-[32px] ' />
          </a>
        </li>
        <li className=' ml-6 ' >
          <a href='https://twitter.com/PuppyLoveCoin' >
            <img src={Twitter} className=' w-[32px] h-[32px] ' />
          </a>
        </li>
      </ul>
    <div className="text-center text-sm text-primary-dark pt-5">info@puppylovecoin.com</div>
    <div className="text-center text-sm text-primary-dark ">puppylovecoin@gmail.com</div>
      <h2 className=' f-f-r text-sm text-yellow-light py-[55px] ' >Copyright * 2023. PuppyLove. All Rights Reserved.</h2>
      <p className=' f-f-r text-sm text-primary-dark ' >
      This website provides information only and does not constitute an offer or recommendation to buy or sell $PUPPYLOVE tokens. Token transactions are inherently risky, and all participants must be prepared for potential losses. The value of $PUPPYLOVE tokens can be highly volatile. It is essential to be aware of local regulations regarding cryptocurrency transactions in your jurisdiction. PuppyLove Coin is not affiliated with any other entities or organizations with a similar name or theme.
      </p>
    </div>
  )
}
