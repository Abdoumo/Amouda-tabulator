import React ,  { useContext, useState } from 'react'
import { AppContext } from './App'
import { useEffect } from 'react'


// let consumer_key='ck_e854f39d2a1dcb53f510853ae9eab32956b9e01b'
// let  consumer_secret='cs_4de5eee7d22326fc91f73fdbfc3909b33613fa9a'
// let shopLink = 'https://fluorite.artec-creativity.com/'
// let products = 'products'

// let reportName = 'well_parameters'
let reportName = 'gauging'

// let baseUrl = `${shopLink}/wp-json/wc/v3/${products}?per_page=100&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
let baseUrl = `http://172.18.28.201:8067/reports/${reportName}?0=1` 

const GetData = React.forwardRef((props , ref) => {
  let {data , setData} = useContext(AppContext)






  // kk //
  // console.log('im erf' , table.setGroupBy("gender"))
  let [ test , setTest ] = useState(0)
  useEffect(() => {
   fetch(baseUrl).then((get) => {
      return get.json()
    }).then((json) => {
 
      setData(json)
    }).catch(err => console.log(err))
  } , [ test ])

// console.log(1)
  console.log(data)
  return (
    <div className="GetData">
      {/* {user} */}
    </div>
  );
  
})


export default GetData

