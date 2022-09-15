import { useContext } from 'react'
import { AppContext } from './App'
import { useLayoutEffect   } from 'react'

let consumer_key='ck_e854f39d2a1dcb53f510853ae9eab32956b9e01b'
let  consumer_secret='cs_4de5eee7d22326fc91f73fdbfc3909b33613fa9a'
let shopLink = 'https://fluorite.artec-creativity.com/'
let products = 'products'
let baseUrl = `${shopLink}/wp-json/wc/v3/${products}?per_page=100&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`


function GetData()  {
  let {setData} = useContext(AppContext)
  let {data} = useContext(AppContext)
  useLayoutEffect(() => {
    fetch(baseUrl).then((get) => {
      return get.json()
    }).then((json) => {
 
      setData(json)

      
    }).catch(err => console.log(err))
  }, [])
  let user = data.map(value => {
    return (

      <p key={value.id}> {value.name} </p>
    )
})
  return (
    <div className="GetData">
      {/* {user} */}
    </div>
  );
  
}


export default GetData

