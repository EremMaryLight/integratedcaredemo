import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Register" element={<Register/>}/>
        <Route  path="Register/Login" element={<Login/>}/>
      </Route>
      
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
