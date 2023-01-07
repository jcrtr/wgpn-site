import React, { memo } from 'react'
import Lottie from 'lottie-react'
import iSpeed from '../public/icons/speed.json'
import iIP from '../public/icons/ip.json'
import iInfinity from '../public/icons/infinity.json'
import iHelp from '../public/icons/question.json'

const iconSpeed = <Lottie animationData={iSpeed} loop={true} />
const iconInfinity = <Lottie animationData={iInfinity} loop={true} />
const iconHelp = <Lottie animationData={iHelp} loop={true} />
const iconIP = <Lottie animationData={iIP} loop={true} />

const CardInfo = memo(({ title }) => {
  return (
    <div className="py-4 grid lg:grid-cols-4 gap-6 grid-cols-2">
      <div
        className="rounded-xl backdrop-blur-sm bg-white/20 p-4 m-4 flex flex-col items-center justify-center
    ">
        <div className="h-14 w-20 -mt-4">{iconSpeed}</div>
        <div className="h-12 mt-4">
          <p className="text-white text-center mt-2 font-bold">
            Неограниченная скорость
          </p>
        </div>
      </div>
      <div
        className="rounded-xl backdrop-blur-sm bg-white/20 p-4 m-4 flex flex-col items-center justify-center
    ">
        <div className="h-14 w-24 -mt-4">{iconInfinity}</div>
        <div className="h-12 mt-4">
          <p className="text-white text-center mt-2 font-bold">
            Безлимитный трафик
          </p>
        </div>
      </div>
      <div
        className="rounded-xl backdrop-blur-sm bg-white/20 p-4 m-4 flex flex-col items-center justify-center
    ">
        <div className="h-14 w-24 -mt-6">{iconHelp}</div>
        <div className="h-12 mt-6">
          <p className="text-white text-center mt-2 font-bold">
            Быстрая техподдержка
          </p>
        </div>
      </div>
      <div
        className="rounded-xl backdrop-blur-sm bg-white/20 p-4 m-4 flex flex-col items-center justify-center
    ">
        <div className="h-14 w-16">{iconIP}</div>
        <div className="h-12 mt-2">
          <p className="text-white text-center mt-2 font-bold">
            Статический IP
          </p>
        </div>
      </div>
    </div>
  )
})

export default CardInfo
