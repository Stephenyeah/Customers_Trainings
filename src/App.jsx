import Carlist from "./components/Customerlist"
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Customer and customer</Typography>
        </Toolbar>
      </AppBar>
      <Customerlist />
    </Container>
  )
}

export default App
