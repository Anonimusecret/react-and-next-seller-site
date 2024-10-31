'use client';
import { TableElements } from "./tableElements";
import {useState, useEffect } from 'react'

import { Form } from "./form/page";
import { Payment } from "./payment/page";


export function Table({elemsList}){
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
        useEffect(() => {

            async function OSSale({info}) {
    
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
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                  body: JSON.stringify(input)
                });
                console.log(response)
                let result = await response.json();
                console.log(result)
              }
              OSSale(itemInfo);
          }, [itemInfo])
    
        return(<Payment setPage={setPage} info={itemInfo}/>)
    }
    
}