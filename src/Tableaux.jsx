import React, { useContext, useRef } from "react";
import { AppContext } from "./App";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { ReactTabulator } from "react-tabulator";
import CircularIndeterminate from "./Progress.jsx";

import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

// import { Tabulator } from 'tabulator-tables';
////

////
const Tableaux = React.forwardRef((props, ref) => {
  let { data } = useContext(AppContext);

  var editableColumns = [];
  const dataVs = useRef([]);
  // console.log(...props)

  // var table = new Tabulator("#example-table", {
  //   data:tableData, //set initial table data
  //   height:"311px",
  //   layout:"fitColumns",
  //   movableRows:true,
  //   groupBy:["gender" , "Gender"],
  //   columns:[
  //       {title:"Name", field:"name"},
  //       {title:"Age", field:"age"},
  //       {title:"Gender", field:"gender"},
  //       {title:"Height", field:"height"},
  //       {title:"Favourite Color", field:"col"},
  //       {title:"Date Of Birth", field:"dob"},
  //       {title:"Cheese Preference", field:"cheese"},
  //   ],
  // });

<<<<<<< HEAD
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
=======
  if (data[0] !== "") {
    // dataKeys.length = 10

    let dataKeys = Object.keys(data[0]);
    console.log();
    let widthCol = 100 / dataKeys.length;
    for (let i = 0; i < dataKeys.length; i++) {
>>>>>>> 8af85a4bbcfab28ed1cca5512277ec6fa665b03d
      editableColumns.push({
        movableColumns: true,
        title: dataKeys[i],
        field: dataKeys[i],
        width: `${widthCol}%`,
        headerHozAlign: "center", // => Age title
        hozAlign: "center", // the progress bar
        formatter: "textarea",
<<<<<<< HEAD
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
=======
        editor: "textarea",
        headerFilter: "input",
      });
    }

    let dataV = [];
>>>>>>> 8af85a4bbcfab28ed1cca5512277ec6fa665b03d

    for (let i = 0; i < data.length; i++) {
      let datum = {};
      dataKeys.forEach((element) => {
        if (!data[i][element]["value"]) {
          datum[element] = "_________";
        } else {
          datum[element] = data[i][element]["value"];
        }
      });
      dataV.push(datum);
    }
    // dataVsElm(dataV)
    dataVs.current[0] = dataV;
  }

  //---------------------- MBA3ED RAJA3HOUM KIMA KANOU ANI 5DMT BAHA BARK DATA HADI ----------------------//

  var tableData = [
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      gender: "male",
      height: 1,
      col: "red",
      dob: "",
      cheese: 1,
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      gender: "female",
      height: 2,
      col: "blue",
      dob: "14/05/1982",
      cheese: true,
    },
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      gender: "male",
      height: 1,
      col: "red",
      dob: "",
      cheese: 1,
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      gender: "female",
      height: 2,
      col: "blue",
      dob: "14/05/1982",
      cheese: true,
    },
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      gender: "male",
      height: 1,
      col: "red",
      dob: "",
      cheese: 1,
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      gender: "female",
      height: 2,
      col: "blue",
      dob: "14/05/1982",
      cheese: true,
    },
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      gender: "male",
      height: 1,
      col: "red",
      dob: "",
      cheese: 1,
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      gender: "female",
      height: 2,
      col: "blue",
      dob: "14/05/1982",
      cheese: true,
    },
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      gender: "male",
      height: 1,
      col: "red",
      dob: "",
      cheese: 1,
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      gender: "female",
      height: 2,
      col: "blue",
      dob: "14/05/1982",
      cheese: true,
    },
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      gender: "male",
      height: 1,
      col: "red",
      dob: "",
      cheese: 1,
    },
    {
      id: 2,
      name: "Mary May",
      age: "1",
      gender: "female",
      height: 2,
      col: "blue",
      dob: "14/05/1982",
      cheese: true,
    },
  ];

  const columns = [
    { title: "Name", field: "name" },
    { title: "Age", field: "age" },
    { title: "Gender", field: "gender" },
    { title: "Height", field: "height" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob" },
    { title: "Cheese Preference", field: "cheese" },
  ];

  // KIFAK DECLARI REF TE3K
  const tableRef = React.useRef(null);

  // W HADI AY FUNCTION 7ATITHA FL ONREF TA3 REACTTABULATOR BACH N5ABI FAHA REF ILI YMDHOULI COMPONENT
  const onRefChange = React.useCallback((r) => {
    tableRef.current = r.current;
  }, []);

  // HADI FUNCTION DERTHA BACH N3TLK KIFAH TGROUPI BRK DIMA 7OT FIELDS FI ARRAY W KI T7EB TNA7I GROUPAGE DIR setGroupBy([])
  const setGroupBy = () => {
    if (tableRef.current) {
      tableRef.current.setGroupBy(["gender"]);
    }
  };

  //---------------------- HNA YA7BSO LA7WAYJ ILI ZEDTHM  CHOUFNI KIFAH DERT W DER KIFHA ----------------------//

  return (
    // <div id='example-table'> </div>
    <div>
      {/******************** HADI ANI BDLTLHA CONDITION MBA3D RAJA3HA PSQ ANA M3NDICH API TA3 ODOO ********************/}
      {false ? (
        <>
          <div id="progressForStyling">
            <h1>Data is loading ..... </h1>
            <CircularIndeterminate />{" "}
          </div>
        </>
      ) : (
        <>
          {/******** HADA LBUTTON ZEDTO JUST BACH NA3ATLK BARK KIFAH NGROUPI MBA3D NA7IH ********/}
          <input type="button" value="Hello" onClick={setGroupBy} />
          <ReactTabulator
            //*********************** HADDI HEYA REF ILI GOTLK A5DM BAHA ***********************//
            onRef={onRefChange}
            columns={columns}
            data={tableData}
            // data={data}
            // options={ref.current}
            // footerElement={<span>Footer</span>}
          />
        </>
      )}
    </div>
  );
});

export default Tableaux;
