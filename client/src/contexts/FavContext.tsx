import { createContext, useState, useContext } from "react";
import { userService } from "../service/users";
import { recipeSerivce } from "../service/recipe";

// Create the context
const FavoritesContext = createContext({
  favorites: [],
  updateFavorites: async () => {},
  toggleFavorite: async () => {},
});

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = async (userId, jwt) => {
    try {
      const res = await userService.getUserById(userId, jwt);
      setFavorites(res.data.favorites);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleFavorite = async (id, isFav, jwt) => {
    try {
      if (isFav) {
        await recipeSerivce.addFav(jwt, id);
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favId) => favId !== id),
        );
      } else {
        await recipeSerivce.addFav(jwt, id);
        setFavorites((prevFavorites) => [...prevFavorites, id]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, updateFavorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the Favorites context
export const useFavorites = () => useContext(FavoritesContext);
