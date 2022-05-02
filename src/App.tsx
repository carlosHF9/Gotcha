import "./App.css";
import Search from "./pages/search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TabSearch from "./components/tab-search";
import TabLastPosts from "./components/tab-last-posts";
import TabNewComplaint from "./components/tab-new-complaint";

const theme = createTheme({
  palette: {
    primary: {
      main: "#298F9D",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="searching" element={<TabSearch />} />
              <Route path="last-posts" element={<TabLastPosts />} />
              <Route path="new-complaint" element={<TabNewComplaint />} />
              <Route path="top-complaints" element={<h1>Search</h1>} />
            </Route>
            <Route path="/" element={<Search />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
