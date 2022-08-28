import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home"
function App() {
  return (
    <div className="App">
        <Navbar />
        <Nav />
      <Routes>
          <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
