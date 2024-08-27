import './App.css';
import { Box, Button, Input, Typography } from '@mui/joy';
import Buttt from './components/button';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('nothing to show for now');

  const click = async () => {
    try {
      const response = await fetch('https://testbotuibackend.onrender.com', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(text)
      });
      // console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
        // setText(responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setText('init')
  }, []);


  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Input sx={{ mb: 5 }} placeholder='یه متنی وارد کن' variant='soft' onChange={(e) => setText(e.target.value)} />
      <Buttt click={click} />
      <Typography sx={{ mt: 5 }}>
        {text}
      </Typography>
    </Box>
  );
}

export default App;