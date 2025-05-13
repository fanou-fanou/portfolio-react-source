import { createBrowserRouter } from "react-router-dom";
import Init from "./pages/Init";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Tactinfo from "./pages/projects/Tactinfo";
import G4s from "./pages/projects/G4s";
import Inspay from "./pages/projects/Inspay";
import Diariko from "./pages/projects/Diariko";
import Ataomad from "./pages/projects/Ataomad";
import Error404 from "./pages/Error404";


const router = createBrowserRouter([
    {
        path: "", element: <Init />, children: [
            { path: "", element: <Home /> },
            { path: "contact", element: <Contact /> },
            { path: "projects", element: <Project /> },
            { path: "projects/details/tactinfo", element: <Tactinfo /> },
            { path: "projects/details/g4s", element: <G4s /> },
            { path: "projects/details/diariko", element: <Diariko /> },
            { path: "projects/details/ataomad", element: <Ataomad /> },
            { path: "projects/details/inspay-lycee-fjkm-fenoarivo", element: <Inspay /> },
            { path: "*", element: <Error404 /> }
        ]
    }
]);

export default router;