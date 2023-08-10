import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
