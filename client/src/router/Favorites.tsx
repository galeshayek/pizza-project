import { useContext, useEffect, useState } from "react";
import { IRecipe } from "../@types/types.recipe";
import { recipeSerivce } from "../service/recipe";
import MyCard from "../components/MyCard";
import { AuthContext } from "../contexts/AuthContext";
import { IUser } from "../@types/types.user";

const Favorites = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const { user } = useContext(AuthContext);
  const me: IUser = user;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    recipeSerivce
      .getAllRecipes()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const arr = recipes.filter((r) => me.favorites.includes(r._id));
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
