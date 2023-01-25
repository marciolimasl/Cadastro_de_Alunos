import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Student from "./Pages/Student";
import NewStudent from "./Pages/New Student";
import Navbar from "./Layout/Navbar";
import Container from "./Layout/Container";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/student" element={<Student />}></Route>
            <Route path="/newstudent" element={<NewStudent />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
