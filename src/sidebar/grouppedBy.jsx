import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const GrouppedBy = () => {
  return (
    <div>
        <Stack spacing={2} direction="row">
      
      <Button variant="contained" color='blue'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      {/* <Button variant="outlined" disabled>Disabled</Button> */}
    </Stack>
    </div>
  )
}

export default GrouppedBy