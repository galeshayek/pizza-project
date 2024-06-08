/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Button, Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import { recipeSerivce } from "../service/recipe";
import { IRecipe } from "../@types/types.recipe";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import formatDate from "../utils/formateDate";

const CrmRecipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
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
        <ul className="flex w-11/12 justify-between border-b px-2  py-2 text-xl font-semibold shadow *:w-3/12 *:text-center">
          <li>Info</li>
          <li>Added at</li>
          <li>Actions</li>
        </ul>
        {r.slice(currentPage, currentPage + 3).map((r) => (
          <div
            className="flex w-11/12 items-center justify-between rounded-lg border px-2"
            key={r._id}
          >
            {/* <img
              className="w-1/12"
              src={r.image || "/assets/images/pizzaLogin.png"}
              alt="Recipe img"
            /> */}
            <div className="line-clamp-3 w-3/12 ">
              <h4>{r.title}</h4>
              <p className="text-gray-600">{r.description}</p>
            </div>
            <p className="w-3/12 text-center text-md">
              {formatDate(r.createdAt)}
            </p>

            <div className=" flex h-fit w-3/12 gap-3">
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
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={r.length - 3}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default CrmRecipes;
