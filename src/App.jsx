import "./App.scss";
import Home from "./views/Home/Home";
import Navigator from "./Core/Navigator";
import { Routes, Route } from "react-router-dom";
import Tateti from "./views/Tateti/Tateti";
import Hangman from "./views/Hangman/Hangman";
import Sudoku from "./views/Sudoku/Sudoku";

function App() {
  return (
    <>
    <Navigator/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tateti" element={<Tateti />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Routes>
    </>
  );
}
export default App;
