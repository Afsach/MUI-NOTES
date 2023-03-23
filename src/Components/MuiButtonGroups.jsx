import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const MuiButtonGroups = () => {
    return (
        <Stack
            direction='column'
            spacing={8}
            p={15}
        >
            <ButtonGroup
                orientation='vertical'
                size='small'
                color='secondary'
                aria-label='alignment button group'
            >
                <Button variant='contained' onClick={()=> alert("left Click")}>
                    left
                </Button>
                <Button variant='contained' onClick={()=> alert("center Click")}>
                    center
                </Button>
                <Button variant='contained' onClick={()=> alert("right Click")}>
                    right
                </Button>
            </ButtonGroup>
            <ButtonGroup orientation='horizontal'
                size='small'
                color='secondary'
            >
                <Button variant='outlined'>
                    left
                </Button>
                <Button variant='outlined'>
                    center
                </Button>
                <Button variant='outlined'>
                    right
                </Button>
            </ButtonGroup>
        </Stack>
    )

}
export default MuiButtonGroups
