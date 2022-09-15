import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors'; 
import ToggleButton from '@mui/material/ToggleButton';

let container = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-sghohy-MuiButtonBase-root-MuiButton-root'
let outlined = 'MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5-MuiButtonBase-root-MuiButton-root'

const GrouppedBy = () => {
  return (
    <div>
        <Stack spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
      
      <Button variant="contained" onClick={displayResult} >Name</Button>
      <Button variant="contained" onClick={displayResult}>Price</Button>
      <Button variant="contained" onClick={displayResult}>date_created</Button>
      <Button variant="contained" onClick={displayResult}>slug</Button>
      <Button variant="contained" onClick={displayResult}>tax_status</Button>
      <Button variant="contained" onClick={displayResult}>stock_status</Button>
      <Button variant="outlined" onClick={displayResult}>Next</Button>
      {/* <Button variant="outlined" disabled>Disabled</Button> */}
    </Stack>
    </div>
  )
}

function displayResult(event){
  let contained = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-sghohy-MuiButtonBase-root-MuiButton-root'
  let outlined = 'MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5-MuiButtonBase-root-MuiButton-root'

  // change class of contained and outlined button
  event.target.className === contained ? event.target.className = outlined : event.target.className = contained 
}


export default GrouppedBy