import './App.css';
import { Box, Button } from '@mui/joy';
import Buttt from './components/button';

function App() {
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
        console.log('Response:', responseData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box>
      <Buttt click={click} />
    </Box>
  );
}

export default App;