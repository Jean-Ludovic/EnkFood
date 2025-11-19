import { createContext } from "react";

const ApiContext = createContext({
  BASE_URL: "/api", // -> /api/produits
});

export default ApiContext;
