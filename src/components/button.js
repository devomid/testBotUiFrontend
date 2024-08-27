import { Box, Button } from '@mui/joy'
import React from 'react'

const Buttt = ({click}) => {
    
    return (
        <Box>
            <Button onClick={click}>
                this is button
            </Button>
        </Box>
    )
}

export default Buttt