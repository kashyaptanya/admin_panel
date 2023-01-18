import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Signup from './componenets/signup';
import User from './dashboard/user';
import Gallery from './dashboard/gallery';
import Contact from './dashboard/contact';
import Calender from './dashboard/calender';
import About from './dashboard/about';
import Term from './dashboard/term';
import Profile from './dashboard/profile';
import { Provider } from "react-redux"
import store from './store';
import Data from './dashboard/data';
import ForgotPassword from './componenets/Forgot';
import Verify from './componenets/VerifyOTP';
import ResetPassword from './componenets/reset';
import Datalist from './dashboard/datalist';
import Policy from './dashboard/privacy';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/user" element={<User />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/about" element={<About />} />
          <Route path="/term" element={<Term />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/data" element={<Data />} />
          <Route path="/list" element={<Datalist />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
