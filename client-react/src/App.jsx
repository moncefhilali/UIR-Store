import Homecomp from "./Component/Home/Homecomp"
import Productcomp from "./Component/Product/Productcomp";
import ProducTextile from "./Component/Product/ProducTextile";
import Product2 from "./Component/Product/Product2";
import Product3 from "./Component/Product/Product3";
import ProductDetails from "./Component/Product/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homecomp />} />
      <Route path="/product" element={<Productcomp></Productcomp>}>
      <Route path="/product/textile" element={<ProducTextile></ProducTextile>}></Route>
      <Route path="/product/Papeterie&Accs" element={<Product2></Product2>}></Route>
      <Route path="/product/HighTech" element={<Product3></Product3>}></Route>
      <Route path="/product/product-details" element={<ProductDetails></ProductDetails>}></Route>
      </Route>
    </Routes>
  </Router>
  )
}

export default App
