import React, { memo } from 'react'

const CardPayments = memo(() => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-8 gap-6">
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <img
          src={'/payments/visa.png'}
          width={100}
          height={100}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex justify-center">
        <img
          src={'/payments/mastercard.png'}
          width={60}
          height={60}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <img
          src={'/payments/mir.png'}
          width={100}
          height={100}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <img
          src={'/payments/sberpay.svg'}
          width={70}
          height={70}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
    </div>
  )
})

export default CardPayments
