import React from 'react'
import Piechar from '../../assets/images/Pie chart.svg'
import Metrics from '../../assets/images/Metrics.svg'
import Metricsmob from '../../assets/images/Metricsmob.svg'
import Piechar2 from '../../assets/images/Pie chart2.svg'
import LogArtboard from '../../assets/images/LogArtboard 572.svg'

export default function Informationcard() {
  return (
    <div className='w-[91%] xl:max-w-[1320px] mx-auto relative mb-[64px] sm:mb-[96px] mt-[64px] text-center   ' >
      <div className=' bg-black-vdark  rounded-[64px] p-[20px] sm:p-[64px] relative ' >
        <div className=' grid grid-cols-12  items-center gap-4 ' >
          <div className=' col-span-12 md:col-span-6 xl:col-span-3 ' >
            <img src={Piechar} className=' w-[242px] h-[242px]  mx-auto' />
          </div>
          <div className=' col-span-12 xl:col-span-6  md:hidden xl:block ' >
            <img src={Metrics} className=' hidden sm:block w-full h-[371px] sm:w-[513px] sm:h-[218px] mx-auto ' />
            <img src={Metricsmob} className=' w-full sm:hidden h-[371px] sm:w-[513px] sm:h-[218px] mx-auto ' />

          </div>
          <div className=' col-span-12 md:col-span-6 xl:col-span-3' >
            <img src={Piechar2} className=' w-[234px] h-[234px] mx-auto ' />
          </div>
          <div className=' col-span-12  hidden md:block xl:hidden ' >
            <img src={Metrics} className=' w-[513px] h-[218px] mx-auto ' />
          </div>
        </div>
        <img src={LogArtboard} className=' block w-[115px] h-[115px]   absolute bottom-[-29px] lg:bottom-[-2px] left-[-27px] lg:left-[-65px]   ' />
      </div>

    </div>
  )
}
