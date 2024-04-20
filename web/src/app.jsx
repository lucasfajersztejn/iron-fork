import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <>
        <Navbar setUser={setUser} />

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/restaurants/:id" element={<Restaurant />} />
          </Routes>
        </main>
    </>
  );
}

export default App;
