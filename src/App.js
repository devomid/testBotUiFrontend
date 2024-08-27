import './App.css';
import { Box, Button, Typography } from '@mui/joy';
import Buttt from './components/button';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const click = async () => {
    try {
      const response = await fetch('https://testbotuibackend.onrender.com', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', await responseData);
        setText(responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box>
      <Buttt click={click} />
      <Typography>
        {text}
      </Typography>
    </Box>
  );
}

export default App;