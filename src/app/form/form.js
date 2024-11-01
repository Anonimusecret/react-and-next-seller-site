export function Form({item, setPage, setInfo}){

  function chekForm(form){
    form.preventDefault()

    let ClientName = document.getElementById('ClientName')
    let phone = document.getElementById('tel')
    let email = document.getElementById('email')

    let emailRegEEx = /^[\w]{1}[\w\.-]*@[\w-]+\.[a-z]{2,4}$/i
    let phoneRegEx = /^[\d\+][\d\(\)\ -]{4,14}\d$/
    let nameRegEEx =/^[А-ЯЁ\s]+$/i

    let formCorrect = false;

    formCorrect = emailRegEEx.test(email.value) && phoneRegEx.test(phone.value) && nameRegEEx.test(ClientName.value);

    if(formCorrect){

      let info = item;

      info.ClientName = ClientName.value;
      info.phone = phone.value.substring(2);
      info.email = email.value;

      setInfo(info);
      setPage('payment')

    }else{
      alert('Введенные данные неверны')
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
  <form onSubmit={(form) => {
    form.preventDefault()
    chekForm(form)
    }} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        
      <div className="sm:col-span-2"> 
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
      <div className="sm:col-span-2"> 
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
            id="tel"
            autoComplete="tel"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            required
            placeholder="+7 (999) 999-99-99"
            inputMode="tel"
            maxLength="12"
          />
        </div>
      </div>
      <div className="sm:col-span-2"> 
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

