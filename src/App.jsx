import Customerlist from "./components/Customerlist"
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Traininglist from "./components/Traininglist"

function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Customer and Training</Typography>
        </Toolbar>
      </AppBar>
      <Customerlist />
      <Traininglist />
    </Container>
  )
}

export default App
