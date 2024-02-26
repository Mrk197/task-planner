import React from 'react';
import Box from '@mui/material/Box';

import Filters from './Filters';

 const TaskBoard = ()=> {
    return(
        <Box sx={{display: 'flex', flexDirection:'column'}}>
            <Filters />
            <Box>Secctions</Box>
        </Box>
    );
 }

 export default TaskBoard;