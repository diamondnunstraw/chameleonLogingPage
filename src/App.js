import './App.css';
import './microsoft.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SortPage from './pages/SortPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SortPage />} />
        <Route path='/:id' element={<SortPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
