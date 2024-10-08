import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routing />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
