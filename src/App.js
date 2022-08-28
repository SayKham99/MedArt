import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home"
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Nav />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
