import React, { useState } from 'react';
import Header from './Headerr'
import Koja from './Koja'
import Storytime from './Storytime'
import Puppysale from './Puppysale'
import Features from './Features'
import Tokenomics from './Tokenomics'
import Informationcard from './Informationcard'
import Buypuppy from './Buypuppy'
import Mission from './Mission'
import Pillers from './Pillers'
import Roadmap from './Roadmap'
import Contractpuppy from './Contractpuppy'
import Partner from './Partner'
import Community from './Community'
import Faq from './Faq'
import Footer from './Footer'
import Buttonup from '../../assets/images/Buttonup.svg'
import Team from './Team';





export default function index() {
    const scrollToTop = () => {

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className=' relative' >
          <div id='Audit' >
            <Pillers />
        </div>
            <button onClick={scrollToTop} className='  absolute bottom-[735px] sm:bottom-[587px] right-[27px] sm:right-[96px] ' >
                <img src={Buttonup} className=' w-[54px] h-[54px] ' />
            </button>
        </div>
    )
}
