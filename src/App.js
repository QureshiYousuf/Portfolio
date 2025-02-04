import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import ProfessionalExperience from "./components/ProfessionalExperience";
import InstantHub from "./components/projects/InstantHub";
import InstantHubDetail from "./components/projects/InstantHubDetail";

function App() {
  const router = Router([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/professional",
          element: <ProfessionalExperience />,
        },
        {
          path: "/project/:projectName",
          element: <InstantHubDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
