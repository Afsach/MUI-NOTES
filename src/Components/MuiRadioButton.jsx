import React from 'react';
import { Radio, Box, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@mui/material';

const MuiRadioButton = () => {
    return (
        <Box width='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
        minHeight='500px'>
            <FormControl error>
                <FormLabel id='job-experience-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup aria-labelledby='job-experience-label'>
                    <FormControlLabel control={<Radio size='medium' color='secondary'/>} value='0-2' label='0-2' />
                    <FormControlLabel control={<Radio />} value='3-5' label='3-5' />
                    <FormControlLabel control={<Radio />} value='5-10' label='5-10' />
                </RadioGroup>
                <RadioGroup aria-labelledby='job-experience-label' row>
                    <FormControlLabel control={<Radio size='medium' color='secondary'/>} value='0-2' label='0-2' />
                    <FormControlLabel control={<Radio />} value='3-5' label='3-5' />
                    <FormControlLabel control={<Radio />} value='5-10' label='5-10' />
                </RadioGroup>
            </FormControl>
        </Box>

    )
}

export default MuiRadioButton