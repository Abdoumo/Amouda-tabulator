import React , {   useRef  } from 'react'
import './Tab.css'
import GetData from "./api";
import GrouppedBy from "./sidebar/grouppedBy.jsx";
import Visibilte from "./sidebar/Visibilte.jsx";
import Tableaux from "./Tableaux.jsx";




const Tab = () => {
  const options = useRef(null)

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
            <GrouppedBy ref = {options} />
             <Visibilte ref = {options}/>
          </div>
        </div>
       
    </div>
  )
}

export default Tab