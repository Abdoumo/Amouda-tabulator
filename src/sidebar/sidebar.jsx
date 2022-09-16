import React, {useState} from 'react'
import GrouppedBy from './grouppedBy'
import Visibilte from './Visibilte'



const Sidebar = React.forwardRef((props, ref) => {
  
  return (
    <div>
      
        <GrouppedBy ref = {ref} />
        <Visibilte />
     
    </div>
  )
})

export default Sidebar