import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';





import Nav from './pages/Nav';
import Home from './pages/Home';
import Giris from './pages/Giris';
import Magaza from './pages/Magaza';
import Hesabim from './pages/Hesabim';


function App() {
  return (
    <div className="App">



<Router>
<Nav/>

  <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hesabim" element={<Hesabim />} />
      <Route exact path="/giris" element={<Giris />} />
      <Route exact path="/magaza" element={<Magaza />} />
  </Routes>
</Router>



    </div>
  );
}

export default App;
