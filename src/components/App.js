import SignUp from './SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="Home" element={<Home />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
