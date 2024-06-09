/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Button, Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import { recipeSerivce } from "../service/recipe";
import { IRecipe } from "../@types/types.recipe";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import formatDate from "../utils/formateDate";
import useWindowSize from "../hooks/useWindowSize";

const CrmRecipes = () => {
  const { width, md } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const jwt = localStorage.getItem("jwt") || "";
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
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

  const pageNum = currentPage == 1 ? currentPage : currentPage + 2;

  return (
    <>
      <Badge
        color={"purple"}
        className="mx-auto my-10 flex w-3/12 justify-center text-3xl"
      >
        CRM
      </Badge>
      <div className=" border"></div>
      <Badge className="m-4  flex justify-center text-3xl md:w-3/12">
        Recipes
      </Badge>
      <div className="flex flex-col gap-4 py-4 md:pl-2">
        <ul className="flex justify-between border-b px-2 py-2  text-xl font-semibold shadow *:w-3/12 *:text-center md:w-11/12">
          <li>Info</li>
          <li>Added at</li>
          <li>Actions</li>
        </ul>
        {recipes.slice(pageNum, pageNum + 3).map((r) => (
          <div
            className="flex items-center justify-between rounded-lg border px-2 max-md:mx-2 max-md:flex-col md:w-11/12 "
            key={r._id}
          >
            <Badge>{recipes.indexOf(r)}</Badge>
            <div className="line-clamp-3 md:w-3/12 ">
              <h4>{r.title}</h4>
              <p className="text-gray-600">{r.description}</p>
            </div>
            <p className="w-3/12 text-center text-md">
              {formatDate(r.createdAt)}
            </p>

            <div className="flex gap-3 max-md:my-3 md:h-fit md:w-3/12">
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
      <div className="  flex justify-center overflow-x-auto pb-8">
        <Pagination
          onClick={() =>
            window.scrollTo({ behavior: "instant", top: 100, left: 0 })
          }
          layout={width >= md ? "pagination" : "table"}
          currentPage={currentPage}
          totalPages={Math.ceil(recipes.length / 3)}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default CrmRecipes;
