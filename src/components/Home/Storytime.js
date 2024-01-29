import React,{useState} from 'react'
import storyimg from '../../assets/images/storyimg.svg'
import landofkoja from '../../assets/images/landofkoja.svg'
import kojavideo from '../../assets/images/kojavideoupdated.mp4'
import { Collapse, Button } from '@material-tailwind/react';



export default function Storytime() {
  const [colapse, setcolapse] = useState(false)
  return (
    <div>
            <div className='w-[91%] xl:max-w-[1080px] mx-auto relative py-[96px] text-center   ' >
                <h2 className=' f-f-r-b font-medium text-xl  sm:text-3xl lg:text-5xl text-primary  ' >Story Time - PuppyLove</h2>
                {/* <img src={storyimg} className=' w-[723px] h-auto xl:h-[385px] mx-auto  my-[64px]  '  /> */}
                <video className=' w-full h-auto mx-auto  my-[64px]  ' controls poster={storyimg}>
    <source src={kojavideo} type="video/mp4"/>
 
</video>
             <div className= {` 2xl:w-[927px] mx-auto  mb-20 relative`}   >
                <p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >It was in the land of Koja where the puppies and their parents roam freely. Their parents (Doge, Shiba, Floki and many others) often raid the land of the humans at night when their puppies are asleep and return with lots of goodies- This to the amazement of puppies when they wake up to see abundance of food.</p>

<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >Then it was winter, on one faithful night, all was set for the usual night raid. Expectations were high, successful raid anticipated. The raid went so well with exception of Doge being captured by humans in the expedition. Disaster! disaster to the kingdom.</p>

<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >Shortly, rumors had it that the human population made Doge great in Meme and that she's happily settled with humans. The kingdom mourned for few days the loss of Doge, their most skillful raider.</p>
<Collapse open={colapse} >
<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >Then It didn't take long when another raiding parent - Shiba, suffered similar fate and found herself in Elon's crib. Another disaster to the kingdom. Meanwhile, in the humans' kingdom, Elon leaked the news using the then bluebird platform and immediately, humans rallied around and made Shiba great in Meme.</p>

<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >Koja's most painful loss was Floki. FLoki has escaped many attempts of capture but was then captured in a raid when the kingdom was experiencing severe famine, with local food shortages, resulting in loss of lives of many puppies. However, humans didn't delay in making the captured Floki great in Meme.</p>

<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >Then suddenly, news started filtering in and around the kingdom, that humans are making every tom - Safemoon, dick - Pepe  and harry - Grok, great in Memes, so long they pretend to be humans' best friend. And so the puppies were faced with an important decision to make - stay in Koja with attendant risks, chiefly hunger or make a tough decision to officially go meet the humans. The latter was decided and a delegation was setup. An approach to humans happened and to their joy, the meeting went well.</p>

<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >Humans found them adorable, agreeing to adopt all the 600billion puppies, further stating that the decision was based solely "For the Love of Puppies". A consensus was also reached to stand on 3 pillars of Innovative Developers (among humans), Strong Community and Support for Puppies and Human kids.</p>

<p className=' f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ' >They also agreed to develop features that will empower the human population using cutting-edge blockchain utilities. Then that a love symbol(❤️) mark be given to all the puppies  for easy identification. A date for formal adoptions of these 600billion puppies; the Great Launch, will soon be announced.</p>

<img src={landofkoja} className=' w-[512px] h-[512px] mx-auto mt-[-53px] z-[-16] relative '  />
</Collapse>
       <div className= {` ${colapse ? "bottom-0 " : "bottom-10" } absolute   w-full z-10`}   >
<button onClick={()=>setcolapse(!colapse)} className='  bg-white w-[156px] h-[46px] rounded-[39px] f-f-r-pr text-lg text-black   ' >
          <ul className=' inline-flex items-center  ' >
            <li>
            
            { colapse ? " collapse" : "Expand" }
            </li>
            <li className=' ml-2 mt-1 ' >
            <svg className={` ${colapse ? " rotate-180 " : ""  } `} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </li>
          </ul>
        
        </button>
        </div>

        <div className= {`${colapse ? '' : "brdr-bg" } `}  >

        </div>
</div>

            </div>
    </div>
  )
}
