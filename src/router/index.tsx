// arquivo de rotas
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/details/:idPokemon",
        element: <Details />
    }
])

export default router;