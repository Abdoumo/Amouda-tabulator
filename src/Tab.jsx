import React , {   useRef  } from 'react'
import './Tab.css'
import GetData from "./api";

import Sidebar from './sidebar/sidebar.jsx'
import Tableaux from "./Tableaux.jsx";




const Tab = () => {
  const options = useRef({
        movableRows: true,
        movableColumns: true, 
        groupBy : []
      })

  return (
    <div> 
    
        <div className='TheBigDiv' >
          <div className="tabulator">
             
          <h3>Amouda Table</h3>
          <GetData ref={options} />
              <Tableaux ref={options} />
              
          </div>

          <div className="sidebar">
            <h4>Groupped here</h4>
            <Sidebar ref={options} />
          </div>
        </div>
       
    </div>
  )
}

export default Tab