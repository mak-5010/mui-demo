import "./App.css";
import { Stack, Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import AddPostButton from "./Components/AddPostButton";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPostButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
