import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';







const GrouppedBy = React.forwardRef((props , ref) => {





  let {data} = React.useContext(AppContext)
  // React.useEffect(() => {
  //   console.log(ref)
  // }, [ref])
  
  
  
  let dataKeys = Object.keys(data[0])
  // dataKeys.length = 10
  // console.log(dataKeys , 'data')
  //
    // Onclick
  //
  let buttons = dataKeys.map((element , index) => {
    return (
      <div key={index}  >
        <Button  variant="primary" style={{margin : '10px'}} onClick={DisplayResult}>{element}</Button>
      </div>
    )
  });
  // style={{ display : 'flex' , maxWidth : '1%' }} 
  // , justifyContent : 'center' , alignItems : 'center' , paddingBottom : '15px'
    
    return (
    <div  style={{display: 'flex',flexWrap: 'wrap',alignContent: 'center',justifyContent: 'center',alignItems: 'center'}}>
      { buttons }     
    </div>
  )
  
  
 
 
  function DisplayResult(event){
    // console.log(event.view.cancelIdleCallback()      , 'kg')
    // let { setoptions } = useContext(optionsContext)
    let contained = 'btn btn-primary'
    let outlined = 'btn btn-outline-primary'
    // change class of contained and outlined button
    event.target.className === contained ? event.target.className = outlined : event.target.className = contained 
    let targetName = event.target.textContent
    let groupped = ref.current['groupBy']
    if (groupped.find(ele => ele === targetName) ===  undefined){
      groupped.push(targetName)    
      // event.view.cancelIdleCallback()
      // event.view.requestIdleCallback()
    }else {
      const index = groupped.indexOf(targetName); // find if ele in the array
      groupped.splice(index, 1) // delete just one item with that name
    }
    
    console.log(ref.current.groupBy)
  }
}
)



export default GrouppedBy