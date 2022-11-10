import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import router from './Routes/MainRouter';

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
    </div>
  );
}

export default App;
