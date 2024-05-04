import './App.css'
import bg from '@/assets/background.webp'
import Header from './components/header/header'
import { useEffect, useState } from 'react'
function App() {
  const [days, setDays] = useState(0)
  const calculateDays = () => {
    const currentDate = new Date()
    const targetDate = new Date('2024-07-06')
    const timeDifference = targetDate.getTime() - currentDate.getTime()
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24))
    if(daysDifference < 0) return setDays(0);
    setDays(daysDifference)
  }

  useEffect(() => {
    calculateDays()
  }, [])
  return (
    <>
      <div className='w-full'>
        <Header />
        <div className='w-full h-full min-h-[calc(100vh-4.5rem)]'>
          <img src={bg} className='absolute h-full w-full object-cover -z-10 brightness-75' />
          <div className='flex flex-col justify-center items-center w-full h-[100vh] gap-5 max-w-[500px] mx-auto'>
            <div className='flex flex-row items-center font-lustria text-4xl gap-3 text-center text-nowrap max-sm:text-2xl'>
              <hr className='max-w-[100px] h-[2px] w-16 max-sm:w-5' />
              <h1 className='font-lustria'>06.07.2024 — Faltam {days} dias</h1>
              <hr className='max-w-[100px] h-[2px] w-16 max-sm:w-5' />
            </div>
            <h1 className='font-lustria text-5xl'>JULIA & PEDRO</h1>
            <p className='font-lustria text-lg text-center'>
              “Eu sei que tudo quanto Deus faz durará eternamente; nada se lhe deve acrescentar, e nada se lhe deve tirar.” – Eclesiastes 3:14 🤍
            </p>
          </div>
        </div>
        <div className='bg-white'>
          
        </div>
      </div>
    </>
  )
}

export default App
