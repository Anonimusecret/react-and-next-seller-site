import { useEffect } from "react"

export function Payment({setPage, info}){

  let send = false
  
  useEffect(() => {
    
    async function OSSale(info) {

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
      
          let response = await fetch('https://sycret.ru/service/api/api', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(input)
          }); 

      }

      if(!send){
        send = true
        OSSale(info) //TODO: Сначала дописать сбор данных, потом уже тестить
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