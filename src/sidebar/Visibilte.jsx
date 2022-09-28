import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';

const Visibilte = React.forwardRef((props , options) => {
  // console.log(options , 'hk')
  let {data} = React.useContext(AppContext)
  let dataKeys = Object.keys(data[0])

  let buttons = dataKeys.map((element , index) => {
    return (
      <div key={index}  >
        <Button className={'VisibilityActivation  actived'} variant="primary" style={{margin : '10px'}} onClick={Visibility}>{element}</Button>
      </div>
    )
  });

    return (
      
      <div>
      <h3>Visibility </h3>
      <div  style={{display: 'flex',flexWrap: 'wrap',alignContent: 'center',justifyContent: 'center',alignItems: 'center'}}>
      { buttons }     
      </div>
      </div>
    
    
  )

  function Visibility(event){
    let targetName = event.target.textContent
    if(event.target.classList.contains('btn-primary')){
      event.target.classList.add('btn-outline-primary')
      event.target.classList.add('inactived')
      event.target.classList.remove('actived')
      event.target.classList.remove('btn-primary')
      
    }else {
      event.target.classList.remove('btn-outline-primary')
      event.target.classList.remove('inactived')
      event.target.classList.add('btn-primary')
      event.target.classList.add('actived')
    }
    // let contained = 'btn btn-primary VisibilityActivation'
    // let outlined = 'btn btn-outline-primary VisibilityActivation'
    // event.target.className === outlined ? event.target.className = contained : event.target.className = outlined 
    
    options.current.toggleColumn(targetName)
    

  }
})




export default Visibilte