'use client';
export function BackButton({setPage}){
  
    return(
      <button
    className="block w-full rounded-md bg-gray-600 mt-2 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    onClick={()=>{setPage('table')
    }}
  >
    Назад
  </button>
    )
    
  }