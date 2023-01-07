import React, { memo } from 'react'

type Values = { days: number; price: number }

const Item = ({ days, price, color, title }: Values) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-8 mt-4 rounded-xl backdrop-blur-sm bg-white/20 text-white font-bold transition hover:-translate-y-1 hover:scale-110 hover:shadow-white/30 shadow-lg">
      <div className={`${color} py-2 w-28 rounded-full text-center mb-4 -mt-8`}>
        <p className={`text-xs font-bold`}>{title}</p>
      </div>
      <p className="text-4xl ordinal oldstyle-nums py-2 text-center">
        {price}
        <sup className="ml-1">₽</sup>
      </p>
      <p>за {days} дней</p>
    </div>
  )
}

const CardPrice = memo(() => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-6 py-4 my-4">
        <Item days={30} price={100} color={'bg-gray-400'} title={'BASE'} />
        <Item days={60} price={190} color={'bg-yellow-400'} title={'MEDIUM'} />
        <Item days={90} price={280} color={'bg-lime-400'} title={'EXTRA'} />
      </div>
    </>
  )
})

export default CardPrice
