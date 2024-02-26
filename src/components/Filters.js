import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filters = ()=>{
    const [ filters, setFilters] = useState({
        deadline: '',
        priority: '',
        priorityType: '',
        status: ''
    });
    const [showPT, setShowPT] = useState(false);

    const handleChange = (event) => {
        console.log('TARGET', event.target);
        setFilters({...filters, [event.target.name]:event.target.value});
    };

    useEffect(()=>{
        if(filters.priority === 'PTYPE') setShowPT(true);
        else setShowPT(false);
    }, [filters]);
    return (
        <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'center'}}>
                <Box width={'10%'} sx={{display: 'flex', flexDirection:'row', padding:1.5}}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size='small' sx={{fontSize:10}}>Deadline date</InputLabel>
                    <Select
                    id="demo-simple-select"
                    value={filters.deadline}
                    label="Deadline date"
                    onChange={handleChange}
                    name='deadline'
                    size='small'
                    >
                    <MenuItem value='DDASC'>Asc</MenuItem>
                    <MenuItem value='DDDES'>Des</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box width={'10%'} sx={{display: 'flex', flexDirection:'row', padding:1.5}}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size='small' sx={{fontSize:10}}>Priority</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.priority}
                    label="Priority"
                    onChange={handleChange}
                    name='priority'
                    size='small'
                    >
                    <MenuItem value={'PASC'}>Asc</MenuItem>
                    <MenuItem value={'PDES'}>Des</MenuItem>
                    <MenuItem value={'PTYPE'}>Type</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                {showPT && <Box width={'10%'} sx={{display: 'flex', flexDirection:'row', padding:1.5}}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size='small' sx={{fontSize:10}}>Priority type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.priorityType}
                    label="Priority type"
                    onChange={handleChange}
                    name='priorityType'
                    size='small'
                    >
                    <MenuItem value={'PTL'}>Low</MenuItem>
                    <MenuItem value={'PTM'}>Medium</MenuItem>
                    <MenuItem value={'PTH'}>High</MenuItem>
                    </Select>
                    </FormControl>
                </Box>}
                <Box width={'10%'} sx={{display: 'flex', flexDirection:'row', padding:1.5}}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size='small' sx={{fontSize:10}}>Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.status}
                    label="Status"
                    onChange={handleChange}
                    name='status'
                    size='small'
                    >
                    <MenuItem value={'SU'}>Unstarted</MenuItem>
                    <MenuItem value={'SIP'}>In progress</MenuItem>
                    <MenuItem value={'SD'}>Done</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
            </Box>
    )
};

export default Filters;