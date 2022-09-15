import React , { createContext , useState } from 'react'
import './Tab.css'
import GetData from "./api";

import Sidebar from './sidebar/sidebar.jsx'
import Tableaux from "./Tableaux.jsx";

// start api 
export const optionsContext = createContext(null)

// end api

// start data-tabulator



const Tab = () => {
  let [ options , setoptions ] = useState({
      
    movableRows: true,
    movableColumns: true, 
    groupBy : []
  
})
  // console.log('here' , data) // data variable public
  return (
    <div> 
 
      <optionsContext.Provider value={{options , setoptions}} >
        <div className='TheBigDiv' >
          <div className="tabulator">
             
          <h3>Amouda Table</h3>
          <GetData />
              <Tableaux />
              
          </div>

          <div className="sidebar">
            <h4>Groupped here</h4>
            <Sidebar />
          </div>
        </div>
        </optionsContext.Provider>
    </div>
  )
}

export default Tab