import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

import "./App.css";

const OtherPage = () => {
  // temp page for routing tests
  return <div>other page</div>;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other-page" element={<OtherPage />} />
            <Route
              path="*"
              element={
                  <div>There's nothing here!</div>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
