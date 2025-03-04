import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { Education } from './pages/Education';
import { Experiences } from './pages/Experiences';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';



function Root() {

  return (
    <>
      <Routes>
        <Route 
        path="/" 
        element={<Home/>}
        />
        <Route
        path="/education/"
        element={<Education/>}
        />
        <Route
        path="/experiences/"
        element={<Experiences/>}
        />
        <Route
        path="/projects/"
        element={<Projects/>}
        />
        <Route
        path="/skills/"
        element={<Skills/>}
        />
        <Route
        path="/contact/"
        element={<Contact/>}
        />
      </Routes>
    </>
  );
}

const router = createBrowserRouter(
  [{path:"*", Component: Root},]
)

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
