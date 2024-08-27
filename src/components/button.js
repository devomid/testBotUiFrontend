import { Box, Button } from '@mui/joy'
import React from 'react'

const Buttt = ({click}) => {
    
    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={click}>
                this is button
            </Button>
        </Box>
    )
}

export default Buttt