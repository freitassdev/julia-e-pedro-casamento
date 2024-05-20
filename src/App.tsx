/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import bg from '@/assets/background.webp'
import Header from './components/header/header'
import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, Minus } from 'lucide-react'
import { Button } from './components/ui/button'
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import emailjs from 'emailjs-com';

interface IParticipants {
  adults: IAdult[]
  childrens: IChildren[]
}

interface IAdult {
  name: string
  will: string
}

interface IChildren extends IAdult {
  age: number | string
}

function App() {
  const [days, setDays] = useState(0)
  const [pin, setPin] = useState<string>('')
  const form = useRef<HTMLFormElement>(null)
  const stepperRef = useRef(null);

  const calculateDays = () => {
    const currentDate = new Date()
    const targetDate = new Date('2024-07-06')
    const timeDifference = targetDate.getTime() - currentDate.getTime()
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24))
    if (daysDifference < 0) return setDays(0);
    setDays(daysDifference)
  }

  useEffect(() => {
    calculateDays()
    console.log(import.meta.env)
  }, [])

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    console.log(form)
    // emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current!, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
    //   .then((result) => {
    //       console.log(result)  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  const options: any[] = ['Não comparecerá', 'Irá comparecer'];
  const [participants, setParticipants] = useState<IParticipants>({
    childrens: [{ name: '', will: 'Não comparecerá', age: 0 }],
    adults: [{ name: '', will: 'Não comparecerá' }]
  });

  useEffect(() => {
    console.log(participants)
  }, [participants])

  return (
    <>
      <div className='w-full'>
        <Header />
        <div className='w-full h-full max-h-[100vh]' id="home">
          <img src={bg} className='absolute h-full w-full object-cover -z-10 brightness-75' />
          <div className='flex flex-col justify-center items-center w-full h-[100vh] gap-5 max-w-[500px] mx-auto px-3 text-center'>
            <div className='flex flex-row items-center font-lustria text-4xl gap-3 text-center text-nowrap max-sm:text-xl'>
              <hr className='max-w-[100px] h-[2px] w-16 max-sm:w-auto' />
              <h1 className='font-lustria'>06.07.2024 — Faltam {days} dias</h1>
              <hr className='max-w-[100px] h-[2px] w-16 max-sm:w-auto' />
            </div>
            <h1 className='font-lustria max-sm:text-4xl text-5xl'>JULIA & PEDRO</h1>
            <p className='font-lustria text-lg text-center'>
              “Eu sei que tudo quanto Deus faz durará eternamente; nada se lhe deve acrescentar, e nada se lhe deve tirar.” – Eclesiastes 3:14 🤍
            </p>
          </div>
        </div>
        <div className='bg-white' id="location">
          <div className='flex flex-col px-10 lg:px-40 py-10 text-pink-400 gap-2'>
            <div className='text-5xl md:text-7xl text-pink-500'>
              <h1 className='font-cursive'>Localização</h1>
            </div>
            <div className='max-md:flex-col flex flex-row items-center justify-between gap-10'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-3 items-center'>
                  <Calendar className='text-pink-500' size={25} /> <span>06 de Julho de 2024 — 19h30</span>
                </div>
                <div className='flex flex-col'>
                  <Minus height="13px" className='text-primary/40 rotate-90' />
                  <Minus height="13px" className='text-primary/40 rotate-90' />
                </div>
                <div className='flex flex-row gap-3 items-center'>
                  <MapPin className='text-pink-500' /> <span>Espaço Villa Borghese - Avenida Coronel Sezefredo Fagundes - Jardim das Pedras, São Paulo - SP, Brasil</span>
                </div>
                <Button className='max-w-40 mt-5 bg-pink-500 hover:bg-pink-400' onClick={() => window.open('https://maps.app.goo.gl/MtREyYmGt4K7uARY6', '_blank')}>Abrir no Maps</Button>
              </div>
              <div className='overflow-x-hidden'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.6681150413929!2d-46.5923206880321!3d-23.425145414418434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5bbcb4278a1%3A0x86013c8474a85ac0!2sEspa%C3%A7o%20Villa%20Borghese!5e0!3m2!1spt-BR!2sbr!4v1714858096303!5m2!1spt-BR!2sbr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className='border-border border w-[350px] h-[200px] md:w-[570px] md:h-[300px] '></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white w-full' id="presence">
          <div className='flex flex-col items-center px-10 lg:px-40 py-10 text-pink-400 gap-2'>
            <div className='text-5xl md:text-7xl text-pink-500'>
              <h1 className='font-cursive'>Confirmação de Presença</h1>
            </div>
            <div className='max-md:flex-row flex flex-row items-center justify-center gap-10'>
              <Stepper ref={stepperRef} style={{ flexBasis: '50rem', width: "80vw" }}>
                <StepperPanel header="Código Pin">
                  <div className="flex flex-col items-center justify-center h-40 ">
                    <h1 className='font-lustria text-2xl'>Qual o nome que está no convite?</h1>
                    <p>Você pode informar o nome do convite ou o PIN enviado por Julia & Pedro</p>
                    <div className='mt-5'>
                      <InputText
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #d4a245' }}
                        placeholder="PIN ou Nome do Convite"
                      />
                      <Button disabled={pin.length <= 0} className='w-full mt-5 bg-pink-500 hover:bg-pink-400' onClick={() => (stepperRef.current as any)?.nextCallback()}>Proximo</Button>
                    </div>

                  </div>
                </StepperPanel>
                <StepperPanel header="Convidados">
                  <div className="flex flex-col items-center justify-center h-auto">
                    <h1 className='font-lustria text-2xl'>Quem vai?</h1>
                    <p>É importante que você forneça o nome completo de cada convidado</p>
                    <div className='mt-5 flex flex-col gap-2 items-center'>
                      <label>Adultos</label>
                      {participants.adults.map((adult, index) => (
                        <div key={index} className='w-full flex flex-col gap-2 items-center py-4 rounded-sm px-4' style={{
                          background: '#c5c5c5',
                        }}>
                          <InputText
                            value={adult.name}
                            onChange={(e) => { setParticipants({ ...participants, adults: participants.adults.map((a, i) => i === index ? { ...a, name: e.target.value } : a) }) }}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d4a245' }}
                            placeholder="Nome do convidado"
                          />
                          <SelectButton value={adult.will} onChange={(e) => setParticipants({ ...participants, adults: participants.adults.map((a, i) => i === index ? { ...a, will: e.value } : a) })} options={options} />
                        </div>
                      ))}
                      <Button disabled={pin.length <= 0} className='w-full mt-5 bg-pink-500 hover:bg-pink-400' onClick={() => (stepperRef.current as any)?.nextCallback()}>Proximo</Button>

                      
                      <label>Crianças</label>
                      {participants.childrens.map((children, index) => (
                        <div key={index} className='w-full flex flex-col gap-2 items-center py-4 rounded-sm px-4' style={{
                          background: '#c5c5c5',
                        }}>
                          <InputText
                            value={children.name}
                            onChange={(e) => { setParticipants({ ...participants, childrens: participants.childrens.map((a, i) => i === index ? { ...a, name: e.target.value } : a) }) }}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d4a245' }}
                            placeholder="Nome do convidado"
                          />
                          <InputText
                            value={children.age.toString()}
                            type='number'
                            onChange={(e) => { setParticipants({ ...participants, childrens: participants.childrens.map((a, i) => i === index ? { ...a, age: parseInt(e.target.value) } : a) }) }}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d4a245' }}
                            placeholder="Nome do convidado"
                          />
                          <SelectButton value={children.will} onChange={(e) => setParticipants({ ...participants, childrens: participants.childrens.map((a, i) => i === index ? { ...a, will: e.value } : a) })} options={options} />
                        </div>
                      ))}
                    </div>
                    <div className='mt-5'>
                      <InputText
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #d4a245' }}
                        placeholder="PIN ou Nome do Convite"
                      />
                      <Button disabled={pin.length <= 0} className='w-full mt-5 bg-pink-500 hover:bg-pink-400' onClick={() => (stepperRef.current as any)?.nextCallback()}>Proximo</Button>
                    </div>

                  </div>
                  <div className="flex pt-4 justify-content-between">
                    <Button onClick={() => (stepperRef.current as any)?.prevCallback()}>Anterior</Button>
                    <Button onClick={() => (stepperRef.current as any)?.nextCallback()}>Proximo</Button>
                  </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                  <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                  </div>
                  <div className="flex pt-4 justify-content-start">
                    <Button onClick={() => (stepperRef.current as any)?.prevCallback()}>Anterior</Button>
                  </div>
                </StepperPanel>
              </Stepper>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <form onSubmit={(e) => sendEmail(e)} ref={form}>
            <input type="text" name='from_pin' />
            <button type='submit' >envia</button>
          </form>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  )
}

export default App
