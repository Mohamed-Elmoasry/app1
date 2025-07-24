import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './componente/Home/Home';
import Layout from './componente/Layout/Layout';
import About from './componente/About/About';
import Contact from './componente/Contact/Contact';
import Portfolio from './componente/Portfolio/Portfolio'; ``

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);




function App() {
  

  return (
    <>
    <RouterProvider router={x}></RouterProvider>
    
    
      
    </>
  )
}

export default App
