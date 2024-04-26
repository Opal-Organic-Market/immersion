import React from "react";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";

import Onboarding1 from "./pages/onboarding1";
import Onboarding2 from "./pages/onboarding2";
import Onboarding3 from "./pages/onboarding3";
import Welcome from "./pages/welcome";
import AccueilTypedeviande from "./pages/accueil";
import AccueilTypedeviandeLivraison from "./pages/accueilLivraison";
import Intro from "./pages/intro";
import Livraison from "./pages/Livrais";
import AccueilParties from "./pages/Parties";
import AccueilParties2 from "./pages/parties2";
import Estimation1 from "./pages/estimation1";
import Estimation2 from "./pages/estimation2";
import Estimation3 from "./pages/estimation3";
import Checkout from "./pages/checkout";
import Confirmation from "./pages/confirmation";
import Login from "./auth/login";
import Register from "./auth/register";
import Header from "./header";

function App() {
  const routesArray = [
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/intro", element: <Intro /> },
    { path: "/onboarding1", element: <Onboarding1 /> },
    { path: "/onboarding2", element: <Onboarding2 /> },
    { path: "/onboarding3", element: <Onboarding3 /> },
    { path: "/welcome", element: <Welcome /> },
    { path: "/accueiltypedeviande", element: <AccueilTypedeviande /> },
    {
      path: "/accueilTypedeviandeLivraison",
      element: <AccueilTypedeviandeLivraison />,
    },
    { path: "/livraison", element: <Livraison /> },
    { path: "/accueilParties", element: <AccueilParties /> },
    { path: "/accueilParties2", element: <AccueilParties2 /> },
    { path: "/estimation1", element: <Estimation1 /> },
    { path: "/estimation2", element: <Estimation2 /> },
    { path: "/estimation3", element: <Estimation3 /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/confirmation", element: <Confirmation /> },
  ];

  const routeResult = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header/>
      <div>{routeResult}</div>
    </AuthProvider>
  );
}

export default App;
