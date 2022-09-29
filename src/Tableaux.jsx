import React, { useContext, useRef  } from 'react'
import { AppContext } from './App'
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import  CircularIndeterminate  from './Progress.jsx'

import 'react-tabulator/lib/styles.css'; // default theme
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css'; // use Theme(s)

// import { Tabulator } from 'tabulator-tables';
////




////
const Tableaux = React.forwardRef((props , options) => {
  const onRefChange = React.useCallback((r) => {
    options.current = r.current;
  }, []);
  let {data} = useContext(AppContext)


var editableColumns = []
 const dataVs = useRef([])


 const dateOption = {
  pagination: 'local',
  groupToggleElement: 'header',
  movableRows: true,
  movableColumns: true,
  layoutColumnsOnNewData: true,
  // height: 600,
  responsiveLayout: 'hide',
  selectable: true,
  paginationSize: 10,
  paginationDataReceived: {
    last_page: 'total_pages',
  },
  paginationDataSent: {
    page: 'page',
    size: 'per_page',
  },
  paginationSizeSelector: [25, 50, 100],
  downloadConfig: {
    columnGroups: true,
    rowGroups: true,
    columnCalcs: true,
  },
  downloadDataFormatter: (data) => data,
  downloadReady: (fileContents, blob) => blob,
};



  if (data[0] !== ''){

 
    // dataKeys.length = 10
    
    let dataKeys = Object.keys(data[0])

    let widthCol = 100 / dataKeys.length
    for (let i = 0 ; i < dataKeys.length ; i++){
      editableColumns.push({
        movableColumns: true, 
        title: dataKeys[i],
        field: dataKeys[i],
        width : `${widthCol}%` , 
        headerHozAlign:"center", // => Age title  
        hozAlign : 'center', // the progress bar
        formatter: "textarea",
        editor: "textarea",      
        headerFilter: "input"
      },
      )}
  
      let dataV = [] 

      for(let i = 0; i < data.length; i++){
        let datum = {}
        dataKeys.forEach(element => {
          if(!data[i][element]['value']){
            datum[element] = '_________'
          }else {

            datum[element] = data[i][element]['value']
          }
        })
        dataV.push(datum)
      }
      // dataVsElm(dataV)
      dataVs.current[0] = dataV

      
    }

  
  return (
    // <div id='example-table'> </div>
  <div>
{data[0] === '' ? (
        <>
        <div id='progressForStyling'>
        <h1>Data is loading .....  </h1>
          <CircularIndeterminate  /> </div>
        </>
        
        ) : (
          <> 
         
            <ReactTabulator
            onRef={onRefChange}
            columns={editableColumns}
            data={dataVs.current[0]}
            options={dateOption}
            // data={data}
            // options = {ref.current}
            // footerElement={<span>Footer</span>}
            /> 
          </>
      )}
    
       
  </div>
)
})

export default Tableaux







