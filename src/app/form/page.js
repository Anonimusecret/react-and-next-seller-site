import { BackButton } from "./backbutton"

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

export function Form({item, setPage, setInfo}){

  function chekForm(form){
    form.preventdefault
    let correct = false;
    let chekname = false;
    let chekphone = false;
    let checkMail = false;




    correct = chekname && chekphone && checkMail

    if(correct){

      let info = item;

      info.ClientName = ClientName;
      info.phone = phone;
      info.email = email;

      setInfo(info);
      console.log(info)
      console.log('наверняка' + item)
      setPage('payment')

    }
    
  }
  return(
    <>


  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
      Покупка
    </h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">
      {item.NAME}
    </p>
  </div>
  <form onSubmit={(form) => {chekForm(form)}} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        
      <div className="sm:col-span-2"> {/**<Name /> **/}
        <label
          htmlFor="company"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Ф.И.О.
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="ClientName"
            id="ClientName"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
      <div className="sm:col-span-2"> {/**<Number /> TODO: mask**/}
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Телефон
        </label>
        <div className="relative">

          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            autoComplete="tel"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            required
            placeholder="+7 (999) 999-99-99"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            inputMode="tel"
          />
        </div>
      </div>
      <div className="sm:col-span-2"> {/**<Email /> **/}
        <label
          htmlFor="email"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Почта
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>


    </div>
    <div className="mt-10">
      <button
        type="submit"
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        
      >
        Оплатить
      </button>

    </div>
  </form>
  <BackButton setPage={setPage}/>
    </>
  )
}

