import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import FindJob from './Components/FindJob';
import About from './Components/About';
import OurTeam from './Components/OurTeam';
import { Routes, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ourteam" element={<OurTeam />}></Route>
        <Route path="/findjob" element={<FindJob />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
