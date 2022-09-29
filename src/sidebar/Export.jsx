import React, { useContext ,  forwardRef } from 'react'
import "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.20/jspdf.plugin.autotable.min.js"
import 'https://oss.sheetjs.com/sheetjs/xlsx.full.min.js'
import "jspdf-autotable";
//
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { faFileExport, faFileCsv, faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Export = forwardRef((props , options) => {


  return (
    <Card className="text-left mt-2">
      <Card.Header>
        <FontAwesomeIcon icon={faFileExport} /> Export
      </Card.Header>
      <Card.Body className="text-center text-dark pr-1 pl-1">
        <Container>
          <Row className="justify-content-md-center">
            
              <Col xs={12} style={{ padding: 2 }}>
                <Button
                  variant="outline-dark"
                  style={{
                    fontSize: '0.7vw',
                    margin: 1,
                    padding: 10,
                    textAlign: 'center',
                    fontWeight: 400,
                    width: '75%',
                  }}
                  onClick={Csv}
                  
                >
                  <FontAwesomeIcon icon={faFileCsv} /> Csv
                </Button>
                
              </Col>
              <Col xs={12} style={{ padding: 2 }}>
                <Button
                  variant="outline-dark"
                  style={{
                    fontSize: '0.7vw',
                    margin: 1,
                    padding: 10,
                    textAlign: 'center',
                    fontWeight: 400,
                    width: '75%',
                  }}
                  onClick={Xlsx}
                  
                >
                  <FontAwesomeIcon icon={faFileExcel} /> Excel
                </Button>
                
              </Col>
              <Col xs={12} style={{ padding: 2 }}>
                <Button
                  variant="outline-dark"
                  style={{
                    fontSize: '0.7vw',
                    margin: 1,
                    padding: 10,
                    textAlign: 'center',
                    fontWeight: 400,
                    width: '75%',
                  }}
                  onClick={Pdf}
                  
                >
                  <FontAwesomeIcon icon={faFilePdf} /> Pdf
                </Button>
                
              </Col>
            
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );


  return (
    <div>
        <h3>Export Data</h3>
        <button onClick={Csv} >Export Csv</button>
        <button onClick={Html} >Export Html</button>
        <button onClick={Pdf} >Export Pdf</button>
        <button onClick={Xlsx} >Export Excel</button>
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
  
  options.current.downloadToTab("pdf"); 

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