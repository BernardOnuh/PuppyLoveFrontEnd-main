import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import LogArtboard from '../../assets/images/LogArtboard 25.svg'
import willbegun from '../../assets/images/willbegun.svg'
import coinsign from '../../assets/images/coinsign.svg'



export default function Puppysale() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const targetDate = moment.tz('2024-02-01 12:00:00', 'America/New_York'); // Set your target date and time, and specify the time zone
        const now = moment();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        } else {
            // Timer has reached zero or a negative value (expired)
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        const timerId = setInterval(calculateTimeLeft, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <div className='w-[91%] xl:max-w-[1080px] mx-auto my-[96px] '>
            <div className='relative p-4 sm:p-16 text-center  w-full h-[560px] sm:h-[601px] xl:w-[870px] lg:h-[516px] rounded-[50px] bg-black-darkest mx-auto  pup-crd  ' >
                <h2 className=' f-f-sm text-3xl lg:text-5xl pupysaletext mt-[7px] ' >PuppyLove</h2>
                <h3 className=' f-f-sm text-3xl lg:text-5xl pupysaletext mt-[7px] '  >Presale is live</h3>
    <p className=' f-f-m text-tiny lg:text-base mt-6 pupysaletext'>It is an opportunity for you to become one of the biggest adopters of amazing puppies "For the Love of Puppies". </p>

                <h4 className=' f-f-sm text-base pupysaletext my-1  ' >“For the Love of Puppies”.</h4>

                <div className=' mt-14 sm:mt-16 relative ' >
                    <ul className=' inline-flex items-center  ' >
                        <li>
                            <div className=' w-[72px] lg:w-[101px] h-[66px] lg:h-[89px] rounded-[8px] timebr  text-center z-30 '  >
                                <h1 className='text-grey-dark f-f-sm text-3xl lg:text-5xl mt-2 lg:mt-0 ' >{timeLeft.days}</h1>
                                <ul className=' inline-flex items-center my-2 '>
                                    <li>
                                        <div className='w-[4px] h-[4px] bg-yellow rounded-full ' ></div>
                                    </li>
                                    <li className=' ml-2' >
                                        <h2 className=' f-f-r text-base text-white-light '  >Days </h2>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li className=' ml-4 sm:ml-6' >
                            <ul>
                                <li>
                                    <div className='w-[6px] h-[6px] bg-yellow rounded-full ' ></div>
                                </li>
                                <li className=' mt-3'>
                                    <div className='w-[6px] h-[6px] bg-yellow rounded-full ' ></div>
                                </li>
                            </ul>
                        </li>
                        <li className=' ml-4 sm:ml-6' >
                            <div className=' w-[72px] lg:w-[101px] h-[66px] lg:h-[89px] rounded-[8px] timebr  text-center '  >
                                <h1 className='text-grey-dark f-f-sm text-3xl lg:text-5xl mt-2 lg:mt-0 ' >{timeLeft.hours}</h1>
                                <ul className=' inline-flex items-center my-2 '>
                                    <li>
                                        <div className='w-[4px] h-[4px] bg-yellow rounded-full ' ></div>
                                    </li>
                                    <li className=' ml-2' >
                                        <h2 className=' f-f-r text-base text-white-light '  >Hours  </h2>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li className=' ml-4 sm:ml-6' >
                            <ul>
                                <li>
                                    <div className='w-[6px] h-[6px] bg-yellow rounded-full ' ></div>
                                </li>
                                <li className=' mt-3'>
                                    <div className='w-[6px] h-[6px] bg-yellow rounded-full ' ></div>
                                </li>
                            </ul>
                        </li>
                        <li className=' ml-4 sm:ml-6' >
                            <div className=' w-[72px] lg:w-[101px] h-[66px] lg:h-[89px] rounded-[8px] timebr  text-center '  >
                                <h1 className='text-grey-dark f-f-sm text-3xl lg:text-5xl mt-2 lg:mt-0 ' >{timeLeft.minutes}</h1>
                                <ul className=' inline-flex items-center my-2 '>
                                    <li>
                                        <div className='w-[4px] h-[4px] bg-yellow rounded-full ' ></div>
                                    </li>
                                    <li className=' ml-2' >
                                        <h2 className=' f-f-r text-base text-white-light '  >Minutes</h2>
                                    </li>
                                </ul>

                            </div>
                        </li>
                    </ul>
                    
        {/* <div className=' w-[237px] h-[44px] absolute top-[-35px] sm:top-[-30px] left-[-22px] sm:left-[51px] -z-10 bg-red ' > */}
        <div className=' begin f-f-m text-tiny md:text-base text-white p-[8px] rounded-[8px] absolute top-[-35px] sm:top-[-30px] left-[-22px] sm:left-[51px] -z-10 bg-[#F59332] ' >
        Puppysale will end in
        </div>
                </div>

    {/*<img src={LogArtboard} className=' w-[267px] lg:w-[349px] h-[267px] lg:h-[349px] absolute left-[8px] sm:left-[-42px] xl:left-[-175px] bottom-[-93px] ' />*/}
            {/* <img src={coinsign} className=' w-[132px] sm:w-[148px] h-auto sm:h-[148px] absolute top-[-50px] sm:top-[-62px] right-[-10px] sm:right-[18px]  lg:hidden  ' />*/}

                <div className="flex justify-center"><a href="https://www.pinksale.finance/launchpad/0xb57072dBF8410F256f29526112d020aB306c5d73?chain=ETH"> <button className="bg-[#F59332] text-white f-f-sm border rounded-full  h-[60px] md   border-[#F59332] px-[32px] text-center  my-[68px]">Join Presale</button></a> </div>

            </div>
        </div>
    )
}
