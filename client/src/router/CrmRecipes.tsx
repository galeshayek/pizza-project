/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { recipeSerivce } from "../service/recipe";
import { IRecipe } from "../@types/types.recipe";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CrmRecipes = () => {
  const jwt = localStorage.getItem("jwt") || "";
  const navigate = useNavigate();
  const [r, setRecipes] = useState<IRecipe[]>([]);
  useEffect(() => {
    recipeSerivce.getAllRecipes().then((r) => {
      setRecipes(r.data);
    });
  }, []);

  //deleteRecipe
  const deleteRecipe = async (id: string) => {
    try {
      if (id && jwt) {
        Swal.fire({
          title: "Are you sure?",
          text: "This action is irreversible",
          icon: "warning",
          showCancelButton: true,
        }).then((res) => {
          recipeSerivce.delete(jwt, id);
          res.isConfirmed && navigate(-1);
        });
      }
    } catch (e) {
      Swal.fire({
        title: "Error",
        //@ts-ignore
        text: e.response.data.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Badge
        color={"purple"}
        className="mx-auto my-10 flex w-3/12 justify-center text-3xl"
      >
        CRM
      </Badge>
      <div className=" border"></div>
      <Badge className="m-4  flex w-3/12 justify-center text-3xl">
        Recipes
      </Badge>
      <div className="flex flex-col gap-4 py-4 pl-2">
        {r.map((r) => (
          <div
            className="flex w-11/12 items-center justify-between rounded-lg border px-2"
            key={r._id}
          >
            <img
              className="w-1/12"
              src={r.image || "/assets/images/pizzaLogin.png"}
              alt=""
            />
            <div className="line-clamp-3 w-6/12 ">
              <h4>{r.title}</h4>
              <p className="text-gray-600">{r.description}</p>
            </div>
            <div className=" flex h-fit gap-3">
              <Button onClick={() => navigate(`/recipe/single/${r?._id}`)}>
                Read
              </Button>
              <Button onClick={() => navigate(`/edit-recipe/${r?._id}`)}>
                Update
              </Button>
              <Button onClick={() => deleteRecipe(r?._id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CrmRecipes;
