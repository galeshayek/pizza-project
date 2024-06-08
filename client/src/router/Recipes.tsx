/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import MyCard from "../components/MyCard";
import { useParams } from "react-router-dom";
import { closeSideBarContext } from "../contexts/closeSideBar";
import { recipeSerivce } from "../service/recipe";
import { IRecipe } from "../@types/types.recipe";
import { FloatingLabel } from "flowbite-react";

const Recipes = () => {
  const { id } = useParams();
  const { toggle } = useContext(closeSideBarContext);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue("");
  }, [id]);

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

  let arr: IRecipe[] = [];
  switch (id) {
    case "Dough":
      arr = doughArr;
      break;
    case "Sauce":
      arr = sauceArr;
      break;
    case "Toppings":
      arr = toppingArr;
      break;
  }

  const search = arr.filter((recipe) =>
    recipe.title.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <div className="flex border-b-2 pb-2 pl-4">
        <h1>{id} Recipes</h1>
      </div>
      <div className="ml-5 mt-5">
        <FloatingLabel
          className=" w-3/12 rounded-lg"
          value={value}
          onChange={handleChange}
          variant="filled"
          label="Search"
        />
      </div>
      <div className="m-5 grid grid-cols-3 gap-5">
        {search.map((i) => (
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
  );
};

export default Recipes;
