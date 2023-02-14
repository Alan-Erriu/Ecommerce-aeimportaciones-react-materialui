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
         <Routes basename="/ae.importaciones">
          <Route exact path="/ae.importaciones" element={<Header />} />
         <Route path="/carrito" element={<CheckoutPage />} />
         </Routes>
         <Footer/>
      </StateProvider>
    </div>
  );
}

export default App;

       