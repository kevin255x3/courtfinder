import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import Notes from './pages/Notes';
import Legal from './pages/Legal';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/court/:id" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
