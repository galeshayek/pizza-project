import { useEffect, useState } from "react";
import { IRecipe } from "../@types/types.recipe";
import MyCard from "../components/MyCard";
import { recipeSerivce } from "../service/recipe";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const userId = localStorage.getItem("id" ?? "");
  useEffect(() => {
    recipeSerivce
      .getAllRecipes()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const arr = recipes.filter((r) => r.userId === userId);
  return (
    <>
      <h1 className="pl-4">my recipes</h1>
      <div className="flex flex-col">
        <div className="flex border-b-2 pb-2 pl-2"></div>
        <div className="m-5 grid justify-center gap-5 md:grid-cols-3">
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

export default MyRecipes;
