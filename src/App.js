import './App.css';
import { Box, Button } from '@mui/joy'
import Buttt from './components/button';

function App() {
  const click = async() => {
    const resonse = await fetch('http://localhost:5005', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
  };

  return (
    <Box>
      <Buttt click={click} />
    </Box>
  );
}

export default App;
