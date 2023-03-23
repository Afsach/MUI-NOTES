import React from 'react'
import { Typography, Box } from '@mui/material'

const MuiBox = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor = "#000"
    height="100vh"
  >
    <Box
      color="#000"
      boxShadow={4}
      display = "flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: '#FFF',
        width: {
          xs: 400,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1400
        },
        height : '50%'
      }}
    >
     <Typography 
     variant='h1'
     textAlign="center">
      Lerning Material UI
     </Typography>
    </Box>

  </Box>
  )
}

export default MuiBox