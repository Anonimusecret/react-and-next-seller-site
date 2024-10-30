'use client';
import {useState} from 'react'

export function TableElements({elemsList, setItemInfo, setPage}){

    let tableElements = elemsList.map((elem, i) => {
    
    
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
            <a onClick={() => {
                setItemInfo(elem);
                setPage('form');
              }}
              className="font-semibold text-gray-900">
              {elem.NAME}
              <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-gray-600">
              {elem.DESCRIPTION}
            </p>
          </div>
        </div>)
      })

    return(tableElements);

}
