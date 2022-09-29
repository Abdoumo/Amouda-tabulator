import React, { forwardRef } from 'react'

// import "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"
// import "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.0.5/jspdf.plugin.autotable.js"

import 'https://oss.sheetjs.com/sheetjs/xlsx.full.min.js'


// import "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.0.10/jspdf.plugin.autotable.min.js"
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


// import * as autoTable from 'jspdf-autotable'

const Export = forwardRef((props , options) => {
   
  return (
    <div>
        <h3>Export Data</h3>
        <button onClick={Csv} >Export Csv</button>
        <button onClick={Html} >Export Html</button>
        <button onClick={Pdf} >Export Pdf</button>
        <button onClick={Xlsx} >Export xlsx</button>
    </div>
  )

  function Csv(){
      options.current.download("csv", "data.csv", {delimiter:"."});
    }
    function Xlsx(){
      options.current.download("xlsx", "data.xlsx",{
        documentProcessing:function(workbook){
            //workbook - sheetJS workbook object
    
            //set some properties on the workbook file
            workbook.Props = {
                Title: "SheetJS Tutorial",
                Subject: "Test",
                CreatedDate: new Date(2017,12,19)
            };
    
            return workbook;
        }
    });
    
}



function Pdf(){
    options.current.download("pdf", "data.pdf", {
        orientation:"portrait", //set page orientation to portrait
        title:"Dynamics Quotation Report", //add title to report
        jsPDF:{
            unit:"in", //set units to inches
        },
        autoTable:{ //advanced table styling
            styles: {
                fillColor: [100, 255, 255]
            },
            columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 60},
        },
        documentProcessing:function(doc){
            //carry out an action on the doc object
        }
    });


}

function Html(){
options.current.download("html", "data.html", {style:true}); //

}

// function Xlsx(){
//     options.current.downloadToTab("pdf");
// //     options.current.download("xlsx", "data.xlsx", {sheetName:"MyData"}); 
// //     var sheets = {
// //         "Accounts Data": "#accounts-table", //first tab with table set using a query selector
// //         "Example Data": true, //second tab, generated from this table
// //         // "Finance Data" : financeTable, //third tab with table set to DOM Node
// //     };
    
// //     options.current.download("xlsx", "AllData.xlsx", {sheets:sheets});
// }

})



export default Export