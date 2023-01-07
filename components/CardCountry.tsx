import Image from 'next/image'
import React, { memo } from 'react'

const CardCountry = memo(({ countryName, countryCode, notRegion: False }) => {
  return (
    <div
      className="rounded-xl backdrop-blur-sm bg-white/20 p-4 m-4 flex flex-col items-center justify-center
">
      <div className="w-16 h16">
        <Image
          src={countryCode}
          width={60}
          height={60}
          alt={countryName}
          className="shadows-lg"
        />
      </div>
      <p className="text-white text-center mt-4 font-bold">{countryName}</p>
    </div>
  )
})

export default CardCountry
