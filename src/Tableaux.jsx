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

  if (data[0] !== "") {
    // dataKeys.length = 10

    let dataKeys = Object.keys(data[0]);
    console.log();
    let widthCol = 100 / dataKeys.length;
    for (let i = 0; i < dataKeys.length; i++) {
      editableColumns.push({
        movableColumns: true,
        title: dataKeys[i],
        field: dataKeys[i],
        width: `${widthCol}%`,
        headerHozAlign: "center", // => Age title
        hozAlign: "center", // the progress bar
        formatter: "textarea",
        editor: "textarea",
        headerFilter: "input",
      });
    }

    let dataV = [];

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
