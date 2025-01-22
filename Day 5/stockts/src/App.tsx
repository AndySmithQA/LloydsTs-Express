import {
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import "./App.css";

//Layouts
import RootLayout from './components/layouts/RootLayout.tsx';

//pages
import Prices, { pricesLoader } from './components/Prices.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
           <Route 
              index
              element={<Prices />}
              loader={pricesLoader} 
          ></Route>
      </Route>
  )
)

function App() {
  return (
        <RouterProvider router={router}/>
  );
}

export default App