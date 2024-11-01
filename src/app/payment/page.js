import { useEffect, useState } from "react"

export default function Main(){
    return(<>
      <div
    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    aria-hidden="true"
  >
    <div
      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
    />
  </div>
    <div className="relative">

<div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4">
      <Form item=""/>
    </div>
  </div>
</div>
</div>
    
    </>)
}

export function Payment({setPage, info}){
  //const [isSent, setIsSent] = useState(false)

  let send = false
  
  useEffect(() => {
    console.log('OSSale активировалось')
    console.log('info' + info.ID)

    //let send = isSent
    
    async function OSSale(info) {
      console.log('OSSale запустилось')
      

        const apiKey = '011ba11bdcad4fa396660c2ec447ef14'
        let Generic_key = info.ID + info.TABLENAME
        let input = {
          ApiKey: apiKey,
          MethodName: "OSSale",
          Id: info.ID,
          TableName: info.TABLENAME,
          PrimaryKey: Generic_key,
          Price: info.PRICE,
          Summa: info.SUMMA,
          ClientName: info.ClientName,
          Phone: info.phone,
          Email: info.email,
          PaymentTypeId: 2,
          UseDelivery: 0,
        }
      
        /**  let response = await fetch('https://sycret.ru/service/api/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(input)
        }); 
        console.log(response)
        let result = await response.json();*/
        //setIsSent(true)
        console.log(send)
      }
      //OSSale(info); //TODO: Сначала дописать сбор данных, потом уже тестить
      if(!send){
        send = true
        OSSale(info)
        
      }
  }, [])
  return(
    <>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
      Покупка
    </h2>
  </div>
  <button
    className="block w-full rounded-md bg-gray-600 mt-2 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    onClick={()=>{setPage('table')
    }}
  >
    Назад
  </button>

    </>
  )
}