import React, { useState } from 'react';
import { Collapse, Button } from '@material-tailwind/react';
import logomoving from '../../assets/images/logomoving.gif'
export default function Faq() {
  const items = [
    { title: 'What is PuppyLove ($PuppyLove)', description: 'PuppyLove is based on a fictional story of family of parent dogs and their  puppies, who were happily living in a kingdom called Koja, until misfortune happened and the family were left without their parents that were captured in a raid, leaving the puppies abandoned. This led to a decision by puppies to join humans who captured their parents, eventually finding safe homes with humans, who agreed to also look after them, aswell as empower human population with cutting-edge blockchain utilities. The project aims to put emphasis on care for animal, puppies and children and to economically empower human population in general.' },
    { title: 'What is the future roadmap for PuppyLove?', description: 'PuppyLove has put forward a number of proposal aimed at achieving its objective - from having an onlinebased resesrch and development hub where blockchain developers and likes that are within puppylove community and beyond, can assemble, research and build utilities aimed at empowering humans. To having NFT unique to the project, to Merchandise, PuppyVerse, Dex, etc. Also a focuse on charitable causes to support dogs, puppies and children.' },
    { title: 'How can I buy $PuppyLove', description: 'Simply click Buy $PuppyLove, It will lead you to a DEX (Uniswap), Choose the amount of ETH to swap, set the tax to auto or to 0.00 and swap. You can also chat with the community verified mods to assist.' },
    { title: 'How can I stake $PuppyLove?', description: 'Staking is not live yet, The community will decide when to initiate this and a formal announcement will be made after the decision, including on the launch date.' },
    { title: 'How can I get involved and support the PuppyLove community?', description: 'Engage with the community on social media, help spread the word and together, puppylove as a community can be a force aimed at community holders and human empowerment and support to causes supporting  animals, dogs and human kids.' },
    { title: 'Does PuppyLove support charitable causes?', description: 'Absolutely, PuppyLove is committed to giving back to the community. A portion of the project is targeted towards charitable initiatives, such as supporting puppy shelters, dogs and children charities.' },

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[91%] lg:max-w-[785px] mx-auto sm:my-[78px] my-[96px]">
      <h2 className="f-f-r-b font-medium text-xl md:text-4xl text-primary text-center">FAQs</h2>
      <p className="text-white f-f-m text-base text-center">
        Here are questions asked that you might need answers to
      </p>
      <div className=' mt-20 mb-10 ' >
        {items.map((item, index) => (
          <div key={index} className={`${activeIndex === index ? "bg-yellow-vdark" : ""} mb-4 focus:bg-yellow-vdark  p-[16px] rounded-[12px]`}>
            <button

              onClick={() => handleToggle(index)}
              className='  capitalize w-full  text-start f-f-sm text-sm sm:text-tiny text-white  relative  '
            >
              {item.title}
              {activeIndex === index ? (
                <svg height="8" className=' rotate-180 absolute top-[8px] right-[15px] ' viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              ) : (
                <svg width="14" height="8" className='  absolute top-[8px] right-[15px] ' viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              )}
            </button>

            <Collapse open={activeIndex === index}>
              <p className="text-grey-light f-f-r text-sm  sm:text-tiny mt-2 ">
                {item.description}
              </p>

            </Collapse>
          </div>
        ))}

        <div className='w-[91%] lg:max-w-[515px] mx-auto text-center sm:mt-[50px] mt-20 ' >
          <h2 className=' f-f-r-pr text-tiny text-grey-light  ' >You’ve got more questions? Join PuppyLove social community and ask away. </h2>
        </div>
      </div>

      <img src={logomoving} className=' mt-20 sm:mt-0 w-[60px] mx-auto  '  />
    </div>
  );
}
