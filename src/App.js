import "./App.css";
import { Button, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <div className="">
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        startIcon={<AddIcon />}
      >
        Add New Post
      </Button>
      <Typography variant="h1">h1. Heading</Typography>
    </div>
  );
}

export default App;
