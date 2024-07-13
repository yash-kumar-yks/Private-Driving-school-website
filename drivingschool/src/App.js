import "./App.css";
import Header from "./Components/Header/Header";
import CarouselScreen from "./Components/Caraousel/CarouselScreen ";
import CoursesCard from "./Components/CoursesCard/CoursesCard";
import StoreLocator from "./Pages/StoreLocator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import CreateBlog from "./Components/Blogs/CreateBlog";
import Signup from "./Pages/Signup";



function App() {
  return (
    <div>
   
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
            
          </Route>
          <Route exact path="/:City" element={<StoreLocator/>}>
          
          </Route>
          <Route exact path="/Login" element={<Login/>}>
          
          </Route>
          <Route exact path="/Blogs" element={<CreateBlog/>}>
          
          </Route>

          <Route exact path="/Signup" element={<Signup/>}>
          
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
