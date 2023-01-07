import { Disclosure } from '@headlessui/react'
import React, { memo } from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const CardQ = memo(() => {
  return (
    <div className="lg:w-1/2 w-full bg-white/20 backdrop-blur-sm p-4 rounded-xl text-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 font-bold flex justify-between">
              <span>🖥 Технологии</span>
              {open ? <AiOutlineCloseCircle /> : <BiDownArrow />}
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 text-gray-100">
              Для работы мы используем WireGuard. Это новый Протокол VPN,
              который фокусируется на безопасности и производительности.
              Поскольку GET VPN это телеграмм бот на протоколе WireGuard, то
              пользователь будет иметь все плюсы данного прокола, начиная от его
              шифрования и заканчивая высокой скоростью
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 font-bold flex justify-between">
              <span>📡 Трафик</span>
              {open ? <AiOutlineCloseCircle /> : <BiDownArrow />}
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 text-gray-100">
              Мы не лимитируем трафик
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 font-bold flex justify-between">
              <span>🔑 Насколько безопасен?</span>
              {open ? <AiOutlineCloseCircle /> : <BiDownArrow />}
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 text-gray-100">
              Мы не сканируем ваш трафик и не ведем журналы. WireGuard
              Обеспечивам надежную защиту даже при использовании ненадежного
              общедоступного интернет-соединения, поскольку он используют самые
              современные криптографические примитивы.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 font-bold flex justify-between">
              <span>Оплата</span>
              {open ? <AiOutlineCloseCircle /> : <BiDownArrow />}
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 text-gray-100">
              Оплатить подписку возможно только в телеграмм боте. Возможны
              разные способы оплат: банковской картой, SBER-ID или с помощью
              электронного кошелька.{' '}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 font-bold flex justify-between">
              <span>Установка конфигурации</span>
              {open ? <AiOutlineCloseCircle /> : <BiDownArrow />}
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 text-gray-100">
              После совершения оплаты пользователю направляется его конфигурация
              и пошаговая инструкция по установке. При необходимости служба
              поддержки помогает на всех этапах.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 font-bold flex justify-between">
              <span>На каких устройствах возможно установить VPN? </span>
              {open ? <AiOutlineCloseCircle /> : <BiDownArrow />}
            </Disclosure.Button>
            <Disclosure.Panel className="ml-4 text-gray-100">
              На мобильных устройствах на ОС IOS или Android, а также на ПК на
              ОС Windows, MAC, Linux
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
})

export default CardQ
