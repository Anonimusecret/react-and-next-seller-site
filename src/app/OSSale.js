'use server'
export async function OSSale({info}) {

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