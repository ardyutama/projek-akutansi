import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Journal from './pages/Journal'
function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Journal />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
