/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Button } from "flowbite-react";
import MyCard from "../components/MyCard";
import { useContext, useEffect, useState } from "react";
import { closeSideBarContext } from "../contexts/closeSideBar";
import { IRecipe } from "../@types/types.recipe";
import { recipeSerivce } from "../service/recipe";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
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
      {!isLoggedIn ? (
        <section className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="h-[28vw] w-full bg-homeBanner bg-cover bg-center"></div>
          <h1 className="text-red-600">Welcome to Pizza Master!</h1>
          <h2>Discover and Share Delicious Pizza Recipes</h2>
          <p className="px-2 text-xl text-gray-700 md:px-28">
            Welcome to our recipe sharing platform! Here, everyone has the
            opportunity to explore a wide variety of recipes shared by our
            community. Whether you're looking for new culinary inspirations or
            tried-and-true classics, you'll find a recipe to suit your tastes.
          </p>
          <p className="px-2 text-xl text-gray-700 md:px-28">
            For those who want to join in the fun, becoming a member allows you
            to contribute your own recipes. Share your favorite dishes with the
            community and inspire others with your culinary creativity. Sign up
            today and become a part of our growing network of food enthusiasts!
          </p>
          <div className="flex w-52 gap-2 *:w-6/12">
            <Button onClick={() => navigate("/login")}>Log In</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </div>
          <h3 className="mt-10 w-11/12 border-b-2 pl-4 text-center font-medium text-red-600">
            Featured
          </h3>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="h-[28vw] w-full bg-homeBanner bg-cover bg-center"></div>
          <h1 className="text-red-600">Welcome Back to Pizza Master!</h1>
          <h2>Share Your Delicious Pizza Recipes</h2>
          <p className="text-xl text-gray-700 md:px-28">
            We're thrilled to have you back! As a valued member of our
            community, we encourage you to share your culinary creations with
            fellow pizza enthusiasts. Your unique recipes contribute to the
            diversity and richness of our platform.
          </p>
          <Button color={"failure"} onClick={() => navigate("/create")}>
            Share Your Recipe
          </Button>
          <p className="text-xl text-gray-700 md:px-28">
            Ready to inspire others with your pizza-making skills?
            <span className="font-semibold"> Click above </span>
            to share your favorite recipes and make a mark in our pizza-loving
            community!
          </p>
          <h3 className="mt-10 w-11/12 border-b-2 pl-4 text-center font-medium text-red-600">
            Featured
          </h3>
        </section>
      )}

      <div className="mt-4 flex flex-col">
        <Badge className="mb-2 flex justify-center py-3 text-xl">
          Top 3 Recipes for each category
        </Badge>
        <div className="flex justify-center border-b-2 pb-2 pl-2">
          <Badge color={"warning"} className="text-2xl">
            Dough
          </Badge>
        </div>
        <div className="m-5 grid justify-center gap-5 md:grid-cols-3">
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

        <div className="flex justify-center border-b-2 pb-2 pl-4">
          <Badge color={"warning"} className="text-2xl">
            Sauce
          </Badge>
        </div>
        <div className="m-5 grid justify-center gap-5 md:grid-cols-3">
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

        <div className="flex justify-center border-b-2 pb-2 pl-4">
          <Badge color={"warning"} className="text-2xl">
            Toppings
          </Badge>
        </div>
        <div className="m-5 grid justify-center gap-5 md:grid-cols-3">
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
