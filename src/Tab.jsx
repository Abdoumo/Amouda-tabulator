import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator, reactFormatter } from "react-tabulator";
import React from 'react'
import './Tab.css'
import GetData from "./api";
import { useContext } from 'react'
import { AppContext } from './App'
import Sidebar from './sidebar/sidebar.jsx'
import Tableaux from "./Tableaux";
// start api 

// end api

// start data-tabulator



const Tab = () => {
  let {data} = useContext(AppContext)
  // console.log('here' , data) // data variable public
  return (
    <div> 
        <div className='TheBigDiv' >
          <div className="tabulator">
             
          <h3>Amouda Table</h3>
          <GetData />
          <Tableaux />

              {/* <ReactTabulator
                columns={editableColumns}
                data={data}
                footerElement={<span>Footer</span>}
              /> */}
          </div>

          <div className="sidebar">
            <h4>Groupped here</h4>
            <Sidebar />
          </div>
        </div>
    </div>
  )
}

export default Tab