import { useContext, useEffect, useState } from "react";
import { IRecipe } from "../@types/types.recipe";
import { recipeSerivce } from "../service/recipe";
import MyCard from "../components/MyCard";
import { IUser } from "../@types/types.user";
import { userService } from "../service/users";
import { FavContext } from "../contexts/FavContext";

const Favorites = () => {
  const { status } = useContext(FavContext);
  const id = localStorage.getItem("id") || "";
  const jwt = localStorage.getItem("jwt") || "";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [user, setUser] = useState<IUser>();
  const [arr, setArr] = useState<IRecipe[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  useEffect(() => {
    const fetchRecipesAndUser = async () => {
      try {
        const recipeRes = await recipeSerivce.getAllRecipes();
        setRecipes(recipeRes.data);
      } catch (e) {
        console.log(e);
      }

      try {
        const userRes = await userService.getUserById(id, jwt);
        setUser(userRes.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchRecipesAndUser();
  }, [status, id, jwt]);
  useEffect(() => {
    const x = recipes.filter((r) => user?.favorites.includes(r._id));
    setArr(x);
  }, [recipes, user?.favorites, status]);

  return (
    <>
      <h1 className="pl-4">My Favorites</h1>
      <div className="flex flex-col">
        <div className="flex border-b-2 pb-2 pl-2"></div>
        <div className="m-5 grid grid-cols-3 gap-5">
          {arr.map((i) => (
            <span key={i._id}>
              <MyCard
                title={i.title}
                description={i.description}
                image={i.image || "/assets/images/pizzaLogin.png"}
                id={i._id}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
