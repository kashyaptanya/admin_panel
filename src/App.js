import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Signup from './componenets/signup';
import User from './dashboard/user';
import Gallery from './dashboard/gallery';
import Contact from './dashboard/contact';
import Calender from './dashboard/calender';
import About from './dashboard/about';
import Term from './dashboard/term';
function App() {
  return (
  <>
   <HashRouter>
      <Routes>
      <Route  path="/" element={<Signup/>} />
      <Route  path="/user" element={<User/>} />
      <Route  path="/gallery" element={<Gallery/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/calender" element={<Calender/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/term" element={<Term/>} />
      </Routes>
    </HashRouter> 
  </>
  );
}

export default App;
