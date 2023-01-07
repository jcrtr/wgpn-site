import React, { memo } from 'react'

type Values = { countryName: string; countryCode: string }

const CardCountry = memo(({ countryName, countryCode }: Values) => {
  return (
    <div
      className="rounded-xl backdrop-blur-sm bg-white/20 p-4 lg:m-4 flex flex-col items-center justify-center
">
      <div className="w-16 h16">
        <img
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
