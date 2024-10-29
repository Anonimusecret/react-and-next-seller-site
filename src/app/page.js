import { requestToBodyStream } from "next/dist/server/body-streams";
import Image from "next/image";

export default function Main(){

  return(
      <>
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
    <Table />
    </>
  )
}


export async function Table(){

  let elemsList;
  let tableElements

  const apiKey = '011ba11bdcad4fa396660c2ec447ef14'
  let input = {
    ApiKey: apiKey,
    MethodName: "OSGetGoodList"
  }

  let response = await fetch('https://sycret.ru/service/api/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(input)
  });
  console.log(response)
  let result = await response.json();
  elemsList = result.data
  console.log(elemsList)


    tableElements = elemsList.map((elem, i) => {

    return(  <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50" key={elem.ID}>
      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <svg
          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
        <path
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
        </svg>
      </div>
      <div>
        <a href="/form" className="font-semibold text-gray-900">
          {elem.NAME}
          <span className="absolute inset-0" />
        </a>
        <p className="mt-1 text-gray-600">
          {elem.DESCRIPTION}
        </p>
      </div>
    </div>)
  })

  return(  <div className="relative">

    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {tableElements}
        </div>
      </div>
    </div>
  </div>)
}