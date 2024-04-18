import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import Navbar from "./components/navbar";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
