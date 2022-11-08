import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/MainRouter';

function App() {
  return (
    <div className="App">
      <div className=''>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
