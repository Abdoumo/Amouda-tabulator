import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




let container = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-sghohy-MuiButtonBase-root-MuiButton-root'
let outlined = 'MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5-MuiButtonBase-root-MuiButton-root'

const GrouppedBy = React.forwardRef((props , ref) => {
  
    return (
    <div>
        <Stack spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
          
      <Button variant="contained" onClick={DisplayResult}>Name</Button>
      <Button variant="contained" onClick={DisplayResult}>Price</Button>
      <Button variant="contained" onClick={DisplayResult}>date_created</Button>
      <Button variant="contained" onClick={DisplayResult}>slug</Button>
      <Button variant="contained" onClick={DisplayResult}>tax_status</Button>
      <Button variant="contained" onClick={DisplayResult}>stock_status</Button>
      <Button variant="outlined" onClick={DisplayResult}>Next</Button>
      {/* <Button variant="outlined" disabled>Disabled</Button> */}
    </Stack>
    </div>
  )
  function DisplayResult(event){
    
    
    // let { setoptions } = useContext(optionsContext)
    let contained = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-sghohy-MuiButtonBase-root-MuiButton-root'
    let outlined = 'MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5-MuiButtonBase-root-MuiButton-root'
    
    // change class of contained and outlined button
    event.target.className === contained ? event.target.className = outlined : event.target.className = contained 
    let targetName = event.target.textContent.toLowerCase()
    let groupped = ref.current['groupBy']
    if (groupped.find(ele => ele == targetName) ==  undefined){
      groupped.push(targetName)    
    }else {
      const index = groupped.indexOf(targetName); // find if ele in the array
      groupped.splice(index, 1) // delete just one item with that name
    }
   

  }
}
)



export default GrouppedBy