'use client';
import { TableElements } from "./tableElements";
import {useState, useEffect } from 'react'

import { Form } from "./form/page";
import { Payment } from "./payment/page";


export async function Table({elemsList}){
    const [itemInfo, setItemInfo] = useState(null)
    const [page, setPage] = useState('table')


    if(page == 'table'){
        return(  
            <div className="relative">
        
                <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            <TableElements elemsList={elemsList} setItemInfo={setItemInfo} setPage={setPage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if(page == 'form'){
        return(<Form info={itemInfo} setPage={setPage} setInfo={setItemInfo}/>)
    }else if(page == 'payment'){
        
        return(<Payment setPage={setPage} info={itemInfo}/>)
    }
    
}