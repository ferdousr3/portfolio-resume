import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="./home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
