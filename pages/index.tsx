import Head from 'next/head'
import localFont from '@next/font/local'
import CardInfo from '../components/CardInfo'

import Lottie from 'lottie-react'
import iCup from '../public/icons/cup.json'
import CardCountry from '../components/CardCountry'
import { FaAndroid, FaApple, FaTelegram, FaWindows } from 'react-icons/fa'

import { SiUbuntu } from 'react-icons/si'

import DE from '../public/countries/germany.png'
import NL from '../public/countries/netherlands.png'
import UK from '../public/countries/united-states.png'
import US from '../public/countries/united-kingdom.png'
import logo from '../public/logo.png'
import { AiFillMacCommand } from 'react-icons/ai'
import CardPrice from '../components/CardPrice'
import Image from 'next/image'
import CardServices from '../components/CardServices'
import CardPayments from '../components/CardPayments'

import { Rubik } from '@next/font/google'

const myFont = localFont({ src: '../public/oneday.otf' })
const myFontRU = localFont({ src: '../public/Wastebased.otf' })
const rubikFont = Rubik()

const iconCup = <Lottie animationData={iCup} loop={true} />

const SEO = {
  title: 'Скачать лучший VPN для iPhone и Android (бесплатно) на русском',
  description:
    'Здесь ты можешь скачать лучший VPN для своего iPhone или Android. Бесплатный тестовый период. Переходи на наш телеграм GET VPN'
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <link rel="icon" href={`/logo.png`} />
        <meta name="application-name" content="GET VPN" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content={`https://get-vpn.ru`} key="url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} key="title" />
        <meta
          property="og:description"
          content={SEO.description}
          key="description"
        />
        <meta property="og:image" content={`/logo.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="get-vpn.ru" />
        <meta property="twitter:url" content={`https://get-vpn.ru`} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={`/logo.png`} />
      </Head>
      <main className={rubikFont.className}>
        <div className="bg-hero bg-no-repeat bg-center bg-fixed bg-cover py-8 px-4">
          <div className="container mx-auto flex flex-col items-center justify-center h-full">
            <div className="w-full flex justify-between">
              <div className="w-96 flex flex-row items-center">
                <Image src={logo} width={60} />
                <div className={myFont.className}>
                  <p className="ml-2 text-white font-bold">GET VPN</p>
                </div>
              </div>
              {/* <div className="lg:w-[250px] w-full flex px-4 items-center "> */}
              {/*   <div className="w-14 h-14 mr-2">{iconPresent}</div> */}
              {/*   <div className="flex flex-col justify-start"> */}
              {/*     <p className="text-gray-100 text-xs mr-2"> */}
              {/*       бесплатно по промокоду */}
              {/*     </p> */}
              {/*     <p className="font-semibold text-green-400">site</p> */}
              {/*   </div> */}
              {/* </div> */}
              <div className="lg:w-[200px] w-full shadow-lg rounded-xl px-2 flex flex-wrap items-center ">
                <div className="w-16 h-16">{iconCup}</div>
                <div className="felx flex-col items-center">
                  <p className="text-gray-100 text-xs">my-expert.ru</p>
                  <p className="text-white font-bold">№1 VPN 2022</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-12">
              <div className="flex flex-col justify-center text-center">
                <div className={myFont.className}>
                  <h1 className="text-7xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    GET VPN
                  </h1>
                </div>
                <p className="text-xl text-gray-100">
                  Телеграм бот, который заменяет приложение!
                </p>
              </div>
              {/* <div className="w-1/2 flex items-center justify-center "> */}
              {/*   <Image */}
              {/*     src={iPhone} */}
              {/*     width={250} */}
              {/*     height={200} */}
              {/*     className="filter drop-shadow-lg shadow-green-400" */}
              {/*   /> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center py-8">
              <a href="https://t.me/wg_vpn_bot">
                <button className="flex items-center py-3 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 shadow-blue-600/50 rounded-lg shadow-lg text-white font-bold">
                  <FaTelegram className="mr-2 text-xl" />
                  <p>Установить GET VPN</p>
                </button>
              </a>
              <div className="py-4">
                <a
                  href="https://t.me/wg_vpn_bot?start=site"
                  className="text-sm text-lime-400 font-bold">
                  активировать 3 дня бесплатно
                </a>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col items-center justify-center py-8 gap-6 text-gray-200 text-2xl">
              <div className="flex gap-6">
                <div className="rounded-full h-12 w-24 backdrop-blur-sm bg-white/20 flex items-center justify-center">
                  <FaApple />
                  <p className="text-xs ml-2">iOS</p>
                </div>
                <div className="rounded-full h-12 w-24 backdrop-blur-sm bg-white/20 flex items-center justify-center">
                  <FaAndroid />
                  <p className="text-xs ml-2">Android</p>
                </div>
                <div className="rounded-full h-12 w-24 backdrop-blur-sm bg-white/20 flex items-center justify-center">
                  <FaWindows />
                  <p className="text-xs ml-2">Windows</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="rounded-full h-12 w-24 backdrop-blur-sm bg-white/20 flex items-center justify-center">
                  <AiFillMacCommand />
                  <p className="text-xs ml-2">MacOS</p>
                </div>
                <div className="rounded-full h-12 w-24 backdrop-blur-sm bg-white/20 flex items-center justify-center">
                  <SiUbuntu />
                  <p className="text-xs ml-2">Ubuntu</p>
                </div>
              </div>
            </div>
            <CardInfo />
            <p className="mt-8 text-white font-bold text-2xl">Тарифы</p>
            <CardPrice />
            <p className="mt-8 text-white font-bold text-2xl">Регионы</p>
            <div className="py-4 grid lg:grid-cols-4 gap-6 grid-cols-2">
              <CardCountry countryName="Германия" countryCode={DE} />
              <CardCountry countryName="Нидерланды" countryCode={NL} />
              <CardCountry countryName="Великобритания" countryCode={US} />
              <CardCountry countryName="США" countryCode={UK} />
            </div>
            <p className="mt-8 text-white font-bold text-2xl">
              Доступ к сервисам
            </p>
            <CardServices />
            <p className="mt-8 text-white font-bold text-2xl text-center">
              Удобные способы оплаты
            </p>
            <CardPayments />
            <div className="w-full flex justify-between text-white py-8">
              <div className="flex justify-start">
                <p>
                  Связаться с нами:
                  <a href="https://t.me/get_vpn_help" className="ml-2">
                    @get_vpn_help
                  </a>
                </p>
              </div>
              <div className="ml-2">
                <p>copyright © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
