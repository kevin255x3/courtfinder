// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/court/:id" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;