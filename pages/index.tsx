import Head from 'next/head'
import localFont from '@next/font/local'
import CardInfo from '../components/CardInfo'

import Lottie from 'lottie-react'
import iCup from '../public/icons/cup.json'
import iClick from '../public/icons/click.json'
import CardCountry from '../components/CardCountry'
import { FaAndroid, FaApple, FaTelegram, FaWindows } from 'react-icons/fa'

import { SiUbuntu } from 'react-icons/si'

import CardPrice from '../components/CardPrice'
import CardServices from '../components/CardServices'
import CardPayments from '../components/CardPayments'

import { Rubik } from '@next/font/google'
import { AiFillMacCommand } from 'react-icons/ai'

const myFont = localFont({ src: '../public/oneday.otf' })
const rubikFont = Rubik()

const iconCup = <Lottie animationData={iCup} loop={true} />
const iconClick = <Lottie animationData={iClick} loop={true} />

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
        <link rel="icon" href={`/logo.PNG`} />
        <meta name="application-name" content="GET VPN" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:url" content={`https://get-vpn.ru`} key="url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} key="title" />
        <meta
          property="og:description"
          content={SEO.description}
          key="description"
        />
        <meta property="og:image" content={`/logo.PNG`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="get-vpn.ru" />
        <meta property="twitter:url" content={`https://get-vpn.ru`} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={`/logo.PNG`} />
      </Head>
      <main className={rubikFont.className}>
        <div className="bg-hero bg-no-repeat bg-center bg-fixed bg-cover py-8 px-4">
          <div className="container mx-auto flex flex-col items-center justify-center h-full">
            <div className="w-full flex justify-between">
              <div className="w-80 flex flex-row items-center">
                <img src={'/logo.PNG'} width={60} alt="logo" />
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
              <div className="lg:w-[200px] w-full flex flex-wrap items-center ">
                <div className="w-16 h-16">{iconCup}</div>
                <div className="felx flex-col items-center">
                  <p className="text-gray-100 text-xs">my-expert.ru</p>
                  <p className="text-white font-bold">№1 VPN 2022</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-12 mt-8">
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
              <div className="flex py-4 items-center">
                <div className="h-12 w-12">{iconClick}</div>
                <a
                  href="https://t.me/wg_vpn_bot?start=site"
                  className="text-sm text-lime-400 font-bold underline decoration-lime-500">
                  активировать 3 дня бесплатно
                </a>
                <div className="w-12">{iconClick}</div>
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
            <div className="py-4 grid lg:grid-cols-4 lg:gap-6 gap-3 grid-cols-2">
              <CardCountry
                countryName="Германия"
                countryCode={'/countries/germany.png'}
              />
              <CardCountry
                countryName="Нидерланды"
                countryCode={'/countries/netherlands.png'}
              />
              <CardCountry
                countryName="Великобритания"
                countryCode={'/countries/united-kingdom.png'}
              />
              <CardCountry
                countryName="США"
                countryCode={'/countries/united-states.png'}
              />
            </div>
            <p className="mt-8 text-white font-bold text-2xl">
              Доступ к сервисам
            </p>
            <CardServices />
            <p className="mt-8 text-white font-bold text-2xl text-center">
              Удобные способы оплаты
            </p>
            <CardPayments />
            <div className="w-full flex lg:flex-row flex-col lg:justify-between text-white py-8">
              <p className="lg:text-right text-center">
                Связаться с нами:
                <a href="https://t.me/get_vpn_help" className="ml-2">
                  @get_vpn_help
                </a>
              </p>
              <div className="lg:mt-0 mt-4 lg:text-right text-center">
                <p>Copyright © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
