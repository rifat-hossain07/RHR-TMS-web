import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
