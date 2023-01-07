import React, { memo } from 'react'
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
import { SiCanva } from 'react-icons/si'

const CardServices = memo(() => {
  return (
    <>
      <div className="w-full flex justify-center py-8 gap-6 text-gray-200 text-4xl">
        <div className="rounded-full h-16 w-16 backdrop-blur-sm bg-white/20 flex items-center justify-center">
          <FaFacebook />
        </div>
        <div className="rounded-full h-16 w-16 backdrop-blur-sm bg-white/20 flex items-center justify-center">
          <FaInstagram />
        </div>
        <div className="rounded-full h-16 w-16 backdrop-blur-sm bg-white/20 flex items-center justify-center">
          <FaFacebookMessenger />
        </div>
        <div className="rounded-full h-16 w-16 backdrop-blur-sm bg-white/20 flex items-center justify-center">
          <FaLinkedin />
        </div>
        <div className="rounded-full h-16 w-16 backdrop-blur-sm bg-white/20 flex items-center justify-center">
          <SiCanva />
        </div>
      </div>
    </>
  )
})

export default CardServices
