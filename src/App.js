import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </GithubProvider>
  );
}

export default App;
