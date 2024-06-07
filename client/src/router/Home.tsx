/* eslint-disable react-hooks/exhaustive-deps */
import { Badge } from "flowbite-react";
import MyCard from "../components/MyCard";
import { useContext, useEffect, useState } from "react";
import { closeSideBarContext } from "../contexts/closeSideBar";
import { IRecipe } from "../@types/types.recipe";
import { recipeSerivce } from "../service/recipe";

const Home = () => {
  const { toggle } = useContext(closeSideBarContext);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  useEffect(() => {
    toggle(false);
    recipeSerivce
      .getAllRecipes()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const doughArr = recipes.filter((r) => r.info.category === "dough");
  const sauceArr = recipes.filter((r) => r.info.category === "sauce");
  const toppingArr = recipes.filter((r) => r.info.category === "topping");
  return (
    <>
      <h1 className="pl-4">Featured</h1>
      <div className="flex flex-col">
        <div className="flex border-b-2 pb-2 pl-2">
          <Badge color={"warning"} className="text-2xl">
            Dough
          </Badge>
        </div>
        <div className="m-5 grid grid-cols-3 gap-5">
          {doughArr.slice(0, 3).map((i) => (
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

        <div className="flex border-b-2 pb-2 pl-4">
          <Badge color={"warning"} className="text-2xl">
            Sauce
          </Badge>
        </div>
        <div className="m-5 grid grid-cols-3 gap-5">
          {sauceArr.slice(0, 3).map((i) => (
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

        <div className="flex border-b-2 pb-2 pl-4">
          <Badge color={"warning"} className="text-2xl">
            Toppings
          </Badge>
        </div>
        <div className="m-5 grid grid-cols-3 gap-5">
          {toppingArr.slice(0, 3).map((i) => (
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

export default Home;
