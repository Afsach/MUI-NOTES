import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormLabel, FormGroup, FormControl } from '@mui/material';
import { Bookmark } from '@mui/icons-material';
import { BookmarkBorder } from '@mui/icons-material';

const MuiCheckbox = () => {

    const [acceptTnc, setAcceptTnc] = useState(false);
    const [skills, setSkills] = useState([]);
    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value);
        if (index === -1) {
            setSkills([...skills, e.target.value]);
        }else{
            setSkills(skills.filter(skill => skill !== e.target.value));
        }
    }

    const handleChange = (e) => {
        setAcceptTnc(e.target.checked);
    }
    return (
        <Box display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
            width='100%'
            bgcolor='#2d2a21'
        >
            <Box>
                <FormControlLabel
                    label="accept terms and condition ?"
                    sx={{
                        color: '#ffffff'
                    }}
                    control={<Checkbox color="warning" checked={acceptTnc} onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder color='secondary' />}
                    checkedIcon={<Bookmark color='secondary' />}
                    checked={acceptTnc}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label="HTML"
                            value='HTML'
                            sx={{
                                color : '#fff'
                            }}
                            control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillChange}  color='secondary' />}
                        />
                        <FormControlLabel
                            label="CSS"
                            value='CSS'
                            sx={{
                                color : '#fff'
                            }}
                            control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillChange} color='secondary'  />}
                        />
                        <FormControlLabel
                            label="Javascript"
                            value='Javascript'
                            sx={{
                                color : '#fff'
                            }}
                            control={<Checkbox checked={skills.includes('Javascript')} onChange={handleSkillChange} color='secondary'  />}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            value='HTML'
                            sx={{
                                color : '#fff'
                            }}
                            control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillChange}  color='secondary' />}
                        />
                        <FormControlLabel
                            label="CSS"
                            value='CSS'
                            sx={{
                                color : '#fff'
                            }}
                            control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillChange} color='secondary'  />}
                        />
                        <FormControlLabel
                            label="Javascript"
                            value='Javascript'
                            sx={{
                                color : '#fff'
                            }}
                            control={<Checkbox checked={skills.includes('Javascript')} onChange={handleSkillChange} color='secondary'  />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>

        </Box>
    )
}

export default MuiCheckbox