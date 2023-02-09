import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;
