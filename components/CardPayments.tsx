import React, { memo } from 'react'
import Image from 'next/image'
import Visa from '../public/payments/visa.png'
import MC from '../public/payments/mastercard.png'
import Mir from '../public/payments/mir.png'
import Sber from '../public/payments/sberpay.svg'

const CardPayments = memo(() => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-8 gap-6">
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <Image
          src={Visa}
          width={100}
          height={100}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex justify-center">
        <Image
          src={MC}
          width={60}
          height={30}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <Image
          src={Mir}
          width={100}
          height={100}
          alt="visa"
          className="filter drop-shadow-lg "
        />
      </div>
      <div className="backdrop-blur-sm bg-white/20 p-2 rounded-lg w-24 flex items-center justify-center">
        <Image
          src={Sber}
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
