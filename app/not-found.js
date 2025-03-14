'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
function generateHex(length = 6) {
    const hexChars = '0123456789ABCDEF';
    return Array.from({ length }, () => 
      hexChars[Math.floor(Math.random() * hexChars.length)]
    ).join('');
  }

export const metadata = {
    title: "A problem has been detected...",
}

export default function NotFound() {
  return (
    <div className='bg-[#00A] text-white font-bold' onClickCapture={(e) => {}}>
        <div className='flex h-screen justify-center space-y-4 flex-col text-center'>
        <div className='bg-[#AAA] text-[#00A] mx-auto px-2'>NikitaNik_OS</div>
        <div className='text-left mx-auto space-y-4 w-1/2'>
            <div className='' suppressHydrationWarning>
                Неустранимая ошибка {generateHex(2)} по адресу 00{generateHex(2)}:{generateHex(8)}. Страница "{usePathname()}" 
                будет выгружена из памяти и не будет загружена.
            </div>
            <div>
                * Для завершения работы нажимте любую клавишу<br/>
                * Повторное нажатие клавиш CTRL+F5 приведет к перезагрузке страницы. Все несохраненные данные - не сохранены.
            </div>
        </div>
        </div>
    </div>
  )
}