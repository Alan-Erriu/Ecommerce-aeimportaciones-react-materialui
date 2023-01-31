import Navbar from "./components/Navbar";
import "./App.css";
import { Header } from "./components/Header";
import { StateProvider } from "./components/contex/CartContex";
import CheckoutPage from "./components/CheckoutPage";
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <StateProvider>
        <Navbar />
         <Routes>
          <Route path="/hombres" element={<Header />} />
         <Route path="/check" element={<CheckoutPage />} />
         </Routes>
      </StateProvider>
    </div>
  );
}

export default App;

       