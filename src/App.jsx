import Customerlist from "./components/Customerlist"
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Traininglist from "./components/Traininglist"
import "./App.css";

function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar className="custom-toolbar">
          <Typography variant="h6" className="center-text">Customer and Training</Typography>
        </Toolbar>
      </AppBar>
      <Customerlist />
      <Traininglist />
    </Container>
  )
}

export default App
