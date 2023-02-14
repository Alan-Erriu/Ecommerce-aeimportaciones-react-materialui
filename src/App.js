import Navbar from "./components/Navbar";

import { Header } from "./components/Header";
import { StateProvider } from "./components/contex/CartContex";
import CheckoutPage from "./components/CheckoutPage";
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <StateProvider>
        <Navbar />
         <Routes>
          <Route path="/" element={<Header />} />
         <Route path="/check" element={<CheckoutPage />} />
         </Routes>
         <Footer/>
      </StateProvider>
    </div>
  );
}

export default App;

       