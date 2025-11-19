import { createContext } from "react";

// On utilise "/api" comme base : donnera "/api/produits"
const ApiContext = createContext({
  BASE_URL: "/api",
});

export default ApiContext;
