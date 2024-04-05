import { BrowserRouter, RouterProvider, createBrowserRouter, } from "react-router-dom";
import Login from "./pages/login";

const routes = createBrowserRouter([{
  path: "/",
  element: <Login/>
}])
function App() {
  return (
    <BrowserRouter>
      <RouterProvider routes={routes}/>
    </BrowserRouter>
  );
}

export default App;
