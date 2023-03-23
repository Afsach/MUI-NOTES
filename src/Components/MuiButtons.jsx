import { Button, IconButton, Stack, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

const MuiButtons = () => {
    return (
        <Stack
            direction='column'
            p={10}
            spacing={4}
            >
                <Typography 
                textAlign='center'
                variant='h3'
                component='h4'
                >
                    MUI Buttons
                </Typography>
            <Stack
                spacing={2}
                direction='row'
            >

                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack
                spacing={2}
                direction='row'
            >
                <Button variant='outlined' color='primary'>primary</Button>
                <Button variant='outlined' color='secondary'>secondary</Button>
                <Button variant='outlined' color='error'>error </Button>
                <Button variant='outlined' color='success'>success </Button>
                <Button variant='outlined' color='warning'>warning </Button>
                <Button variant='outlined' color='info'>info </Button>
                <Typography variant='h5'>outlined buttons</Typography>
            </Stack>
            <Stack
            spacing={2}
            direction='row'
            >
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='error'>error </Button>
                <Button variant='contained' color='success'>success </Button>
                <Button variant='contained' color='warning'>warning </Button>
                <Button variant='contained' color='info'>info </Button>
                <Typography variant='h5'>ontained buttons</Typography>
            </Stack>
            <Stack
            spacing={2}
            direction='row'
            >
                <Button variant='Text' color='primary'>primary</Button>
                <Button variant='Text' color='error'>error </Button>
                <Button variant='Text' color='success'>success </Button>
                <Button variant='Text' color='warning'>warning </Button>
                <Button variant='Text' color='info'>info </Button>
                <Typography variant='h5'>text buttons</Typography>
            </Stack>
            <Stack
            spacing={2}
            direction='row'
            display='block'
            >
                <Typography variant='h5' gutterBottom>
                    Note : spacifying display block propery is import because default display property is flex which can affects the size of buttons
                </Typography>
                <Button variant='contained' color='primary' size='small'>small</Button>
                <Button variant='contained' color='error' size='medium'>median </Button>
                <Button variant='contained' color='success' size='large'>large </Button>
                <Typography variant='h5'>Different size buttons</Typography>
            </Stack>
            <Stack
            spacing={2}
            direction='row'
            >
                <Button variant='contained' color='secondary' startIcon={<SendIcon/>} disableElevation>Start Icon</Button>
                <Button variant='outlined' color='secondary' endIcon={<SendIcon/>} >End Icon </Button>
                <Button>
                    <IconButton>
                        <SendIcon/>
                    </IconButton>
                </Button>
                <Button>
                    <IconButton aria-label='send' color='success'>
                        <SendIcon/>
                    </IconButton>
                </Button>
                <Typography variant='h5'>Icon Buttons</Typography>
            </Stack>
            <Stack
            spacing={2}
            direction='row'
            >
                <Button variant='contained' color='warning' onClick={()=> {alert("I am an alert")}}>Alert</Button>
                <Button variant='contained' color='secondary' href='https://www.google.com' target='_blank'> Google</Button>
                
                <Typography variant='h5'>alert and onClick</Typography>
            </Stack>
        </Stack>
    )
}

export default MuiButtons