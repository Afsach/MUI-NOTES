import React from 'react'
import { Box, Button, Stack, TextField, InputAdornment } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const MuiTextField = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            minWidth='100vw'
            backgroundColor='#ccc'
        >
            <Stack
            p={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                m
                sx={{
                    width: {
                        xs: 400,
                        sm: 700,
                        md: 850,
                        xl: 1400
                    },
                    height: '500px'
                }}
                backgroundColor='#f1f1f1'
            >
                <TextField
                    variant='outlined'
                    color='secondary'
                    label='Name'
                    aria-label='user name'
                    aria-autocomplete='none'
                    autoComplete='off'
                    required
                    size='small'
                   fullWidth
                >
                </TextField>
                <TextField
                    variant='outlined'
                    color='secondary'
                    label='Message'
                    aria-label='user name'
                    aria-autocomplete='none'
                    autoComplete='off'
                    required
                    multiline
                    fullWidth
                    size='small'
                    maxRows={2}
                >
                </TextField>
                <TextField 
                label="Password"
                type='password' 
                size='small' 
                required
                InputProps={{
                    endAdornment : <InputAdornment position='end'><RemoveRedEyeIcon fontSize='small'/></InputAdornment>
                }}
                />
                <Button 
                variant='contained'
                color='info'
                fullWidth
                sx={{
                    color : '#ffffff',
                    backgroundColor : 'purple',
                    maxWidth : '100%'
                }}
                >
                    Submit
                </Button>
            </Stack>
        </Box>
    )
}

export default MuiTextField