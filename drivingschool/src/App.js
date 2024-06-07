import "./App.css";
import Header from "./Components/Header/Header";
import CarouselScreen from "./Components/Caraousel/CarouselScreen ";
import CoursesCard from "./Components/CoursesCard/CoursesCard";
import StoreLocator from "./Pages/StoreLocator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FindyourCity from "./Components/Map/FindyourCity";


function App() {
  return (
    <div>
   
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
            
          </Route>
          <Route exact path="/:City" element={<StoreLocator/>}>
          
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
