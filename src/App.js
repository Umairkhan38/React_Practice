import "./App.css";
import { Product } from "./Components/Product";
import StateHandle from "./Components/StateHandle.js";
import List from "./Components/List.js";
import Form from "./Components/PostReqForm.js";
import { Routes, Route } from "react-router-dom";
import CompA from "./Components/LifeCycle/CompA.js";
import SignUp from './Components/SignUp Form/SignUp.jsx' 
import Axios from "./Components/axios.js";
import CallBackComp from "./Components/HigherOrderComp/CallBackComp.js";

function App() {


  return (
    <div>

        <Routes>
          <Route path="/lifeCycle" element={<CompA></CompA>} />

          <Route
            path="/Product"
            element={
              <Product
                pdname="Webcam"
                desc="This is a Web camera"
                price="1000"
              />
            }
          />

          <Route path="/" element={<List />} />
          <Route path="/Form" element={<Form />} />
          <Route path='/HigherOrder' element={<CallBackComp />} />
          <Route path='/SignUp' element={<SignUp />} /> 
          <Route path="/StateHandle" element={<StateHandle />} />
          <Route path="/axios" element={<Axios />} />
        </Routes>
    </div>
  );
}

export default App;
