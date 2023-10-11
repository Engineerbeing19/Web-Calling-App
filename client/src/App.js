import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} /> 
      </Routes>
    </div> // Here the above :roomId is dynamic route 
  );
}

/*
  author : Harsh Mishra
*/

export default App;
