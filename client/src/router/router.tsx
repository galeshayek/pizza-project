import { createBrowserRouter } from "react-router-dom";
import ErrorEelement from "../components/ErrorElement";
import Root from "../layout/Root";
import Login from "./Login";
import Recipes from "./Recipes";
import Register from "./Register";
import CreateRecipe from "./CreateRecipe";
import RecipePage from "./RecipePage";
import Profile from "./Profile";
import MyRecipes from "./MyRecipes";
import EditRecipe from "./EditRecipe";
import Favorites from "./Favorites";
import CrmRecipes from "./CrmRecipes";
import CrmUsers from "./CrmUsers";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "./Home";
import About from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorEelement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "recipes/:id",
        element: <Recipes />,
      },
      {
        path: "recipe/single/:id",
        element: <RecipePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/create",
        element: <CreateRecipe />,
      },
      {
        path: "/profile/edit",
        element: <Profile />,
      },
      {
        path: "/my-recipes",
        element: <MyRecipes />,
      },
      {
        path: "/edit-recipe/:id",
        element: <EditRecipe />,
      },
      {
        path: "/profile/favorites",
        element: <Favorites />,
      },
      {
        path: "/crm/recipes",
        element: (
          <ProtectedRoute auth={10}>
            <CrmRecipes />
          </ProtectedRoute>
        ),
      },
      {
        path: "/crm/users",
        element: (
          <ProtectedRoute auth={10}>
            <CrmUsers />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
