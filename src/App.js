import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Order";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Requireauth from "./components/RequirAuth/Requireauth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route
          path="/inventory"
          element={
            <Requireauth>
              <Inventory />
            </Requireauth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/shipment"
          element={
            <Requireauth>
              <Shipment />
            </Requireauth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
