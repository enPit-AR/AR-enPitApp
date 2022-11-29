import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<StartScreen/>}/>
          <Route path="/GameScreen" element={<GameScreen/>}/>
          <Route path="/ResultScreen" element={<ResultScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
