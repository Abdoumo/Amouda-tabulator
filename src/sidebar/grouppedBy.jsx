import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';




const GrouppedBy = React.forwardRef((props , options) => {
  let ListGroup = []

  let {data} = React.useContext(AppContext)
  let dataKeys = Object.keys(data[0])

  let buttons = dataKeys.map((element , index) => {
    return (
      <div key={index}  >
        <Button  variant="primary" style={{margin : '10px'}} onClick={DisplayResult}>{element}</Button>
      </div>
    )
  });

    return (
    <div  style={{display: 'flex',flexWrap: 'wrap',alignContent: 'center',justifyContent: 'center',alignItems: 'center'}}>
      { buttons }     
    </div>
  )
 
 
  function DisplayResult(event){
    

    let contained = 'btn btn-primary'
    let outlined = 'btn btn-outline-primary'
    // // // change class of contained and outlined button
    // event.target.className === contained ? event.target.className = outlined : event.target.className = contained 
    // ele.click()
    // if(!ele.classList.contains('disabled')){

    // }
    // if (ListGroup.find(elem => elem === targetName) ===  undefined){
    //   ListGroup.push(targetName)  
    //   ele.classList.add('disabled')   
      
    //   // 
    // }else {
    //   const index = ListGroup.indexOf(targetName); // find if ele in the array
    //   ListGroup.splice(index, 1) // delete just one item with that name
    //   ele.classList.remove('disabled') 
    // }
    // if (options.current){
    //   options.current.setGroupBy()
    // }
    
    // 

    let targetName = event.target.textContent
    const getButtonVsb = document.querySelectorAll('Button.VisibilityActivation')
    let ele = ''
    event.target.className === contained ? event.target.className = outlined : event.target.className = contained 

    //  getButtonVsb = ele used  
    getButtonVsb.forEach(element => {
        if(element.textContent === targetName){
          ele = element
        }
      });
//////







      if (ele.classList.contains('inactived')){
        if (ListGroup.find(elem => elem === targetName) ===  undefined){
              ListGroup.push(targetName)  
              ele.classList.add('disabled') 
               
        } else {
          const index = ListGroup.indexOf(targetName); // find if ele in the array
            ListGroup.splice(index, 1)
            ele.classList.remove('disabled') 
        }

      }

      else {
        if (ListGroup.find(elem => elem === targetName) ===  undefined){
          ListGroup.push(targetName)  
          ele.classList.add('disabled') 
          ele.classList.remove('btn-primary') 
          ele.classList.add('btn-outline-primary')
          // ele.click()
        }else {
          const index = ListGroup.indexOf(targetName); // find if ele in the array
          ListGroup.splice(index, 1)
          ele.classList.remove('disabled') 
          ele.classList.add('btn-primary') 
          ele.classList.remove('btn-outline-primary')
        }
        options.current.toggleColumn(targetName)
      }
      ////////
      options.current.setGroupBy(ListGroup)
      
  
    
     
    
     
      
   
  }
}
)



export default GrouppedBy