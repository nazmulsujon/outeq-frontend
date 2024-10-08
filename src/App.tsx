import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthProvider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routing />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
