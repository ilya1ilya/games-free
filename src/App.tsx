import { Routes, Route } from "react-router-dom";

import GamesListPage from "./pages/GamesListPage";
import GamePage from "./pages/GamePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GamesListPage />} />
        <Route path=":id" element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
