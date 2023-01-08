import React, { memo } from 'react'

const CardPayments = memo(() => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 py-8 gap-6">
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <img src={'/payments/visa.png'} width={50} height={50} alt="visa" />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex justify-center">
        <img
          src={'/payments/mastercard.png'}
          width={60}
          height={60}
          alt="visa"
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex justify-center">
        <img src={'/payments/ms.png'} width={60} height={60} alt="visa" />
      </div>

      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <img src={'/payments/mir.png'} width={60} height={100} alt="visa" />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <img src={'/payments/sberpay.svg'} width={60} height={70} alt="visa" />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 lg:py-2 py-6 rounded-lg w-24 flex items-center justify-center">
        <img src={'/payments/iomoney.svg'} width={70} height={70} alt="visa" />
      </div>
    </div>
  )
})

export default CardPayments
