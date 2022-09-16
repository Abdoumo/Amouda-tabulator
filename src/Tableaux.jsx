import React, { useContext  , useState} from 'react'
import { AppContext } from './App'
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";


const Tableaux = React.forwardRef((props , ref) => {
    
  
  let {data} = useContext(AppContext)
  // table data
  const tableData = [];
  data.forEach(element => {
      tableData.push(
          { 
              'name':element.name,
              'price': element.price,
              'date_created' :  element.date_created,
              'tax_status' :  element.tax_status,
              'slug' :  element.slug,
              'stock_status': element.stock_status
          },
          )
  })

  // editableColumns
  
  let editableColumns = [
      {
          title: "Name",
          field: "name",
          width: 150,
          formatter: "textarea",
          editor: "textarea", 
          headerFilter: "input"
        },
        {
          title: "Price Da",
          field: `price`,
          headerHozAlign:"center", // => Age title  
          hozAlign : 'center', // the progress bar
          formatter: "textarea",
          editor: "textarea",  
          headerFilter: "input"    
        },{
          title: "date_created",
          field: "date_created",
          headerHozAlign:"center", // => Age title  
          hozAlign : 'center', // the progress bar
          formatter: "textarea",
          editor: "textarea",      
          headerFilter: "input"
        },{
          title: "stock_status",
          field: "stock_status",
          headerHozAlign:"center", // => Age title  
          hozAlign : 'center', // the progress bar
          formatter: "textarea",
          editor: "textarea",    
          headerFilter: "input"   
        },{
          title: "tax_status",
          field: "tax_status",
          headerHozAlign:"center", // => Age title  
          hozAlign : 'center', // the progress bar
          formatter: "textarea",
          editor: "textarea",   
          headerFilter: "input"   
        },{
          title: "slug",
          field: "slug",
          headerHozAlign:"center", // => Age title  
          hozAlign : 'center', // the progress bar
          formatter: "textarea",
          editor: "textarea",  
          headerFilter: "input"    
        },
  ]
  
 console.log(ref , 'g')
  // setoptions({
  //     movableRows: true,
  //     movableColumns: true, 
  //     groupBy : []
  //   })
  
  
   
  // groupBy:["name" , "date_created"],
return (
  <div>
       <ReactTabulator
        columns={editableColumns}
        data={tableData}
        options = {ref.current}
        // footerElement={<span>Footer</span>}

      />
  </div>
)
})

export default Tableaux