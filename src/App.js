import Properties from "./Components/Properties.js";
import "./App.css";
import { Product } from "./Components/Product";
import StateHandle from "./Components/StateHandle.js";
import List from "./Components/List.js";
import Form from "./Components/Form.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import CompA from "./Components/LifeCycle/CompA.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/lifeCycle" element={<CompA />} />

          <Route
            path="/Product"
            element={
              <Product
                pdname="Webcam"
                desc="This is a Web camera"
                price="1250"
              />
            }
          />

          <Route path="/List" element={<List />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/StateHandle" element={<StateHandle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
