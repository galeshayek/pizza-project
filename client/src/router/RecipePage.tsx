/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Avatar, Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeSerivce } from "../service/recipe";
import { IRecipe } from "../@types/types.recipe";
import BreakString from "../components/BreakString";
import { userUrl } from "../service/url";
import { FaArrowLeft, FaBars, FaPuzzlePiece } from "react-icons/fa";
import { CgTime } from "react-icons/cg";
import { TbCategoryFilled } from "react-icons/tb";
import { SiLevelsdotfyi } from "react-icons/si";
import moment from "moment";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const RecipePage = () => {
  const jwt = localStorage.getItem("jwt");
  const { role } = useContext(AuthContext);
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();
  const { id } = useParams();
  const [r, setRecipe] = useState<IRecipe>();
  const isUser = userId == r?.userId;
  const isAdmin = role == 10;

  const [formattedCreated, setCreated] = useState("");
  const [formattedUpdated, setUpdated] = useState("");
  useEffect(() => {
    if (id)
      recipeSerivce.getRecipeById(id).then((res) => {
        setRecipe(res.data);
      });
  }, []);

  //render created and updated date
  useEffect(() => {
    const isoCreated = r?.createdAt;
    const format = moment(isoCreated).format("MMMM Do, YYYY, HH:mm");
    setCreated(format);
    const isoUpdated = r?.updatedAt;
    const formatDate = moment(isoUpdated).format("MMMM Do, YYYY, HH:mm");
    setUpdated(formatDate);
  }, [r]);

  //deleteRecipe
  const deleteRecipe = async () => {
    try {
      if (r?._id && jwt) {
        Swal.fire({
          title: "Are you sure?",
          text: "This action is irreversible",
          icon: "warning",
          showCancelButton: true,
        }).then((res) => {
          recipeSerivce.delete(jwt, r?._id);
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
    <Card>
      <Button className="w-16" color={"dark"} onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </Button>
      {/* <img
        className="size-4/12"
        src={r?.image ?? "/assets/images/pizzaLogin.png"}
        alt=""
      /> */}
      <h2 className="border-b-2 text-red-600">{r?.title}</h2>
      <h3 className="text-2xl">{r?.description}</h3>
      <div className="mr-auto">
        <Avatar
          img={`${userUrl}${r?.user.image}`}
        >{`${r?.user.firstName} ${r?.user.lastName}`}</Avatar>
      </div>
      <div className="flex justify-center gap-10 *:flex *:size-32 *:flex-col *:items-center *:justify-center *:rounded-xl *:border-2 *:p-2">
        <div>
          <FaBars />
          <p className="font-semibold text-red-600">ingredients</p>
          <p>{r?.info.amount}</p>
        </div>
        <div>
          <CgTime />
          <p className="font-semibold text-red-600">Time</p>
          <p>{r?.info.time}</p>
        </div>
        <div>
          <TbCategoryFilled />
          <p className="font-semibold text-red-600">Category</p>
          <p>{r?.info.category}</p>
        </div>
        <div>
          <SiLevelsdotfyi />
          <p className="font-semibold text-red-600">Level</p>
          <p>{r?.info.level}</p>
        </div>
        <div>
          <FaPuzzlePiece />
          <p className="font-semibold text-red-600">Portions</p>
          <p>{r?.info.portions}</p>
        </div>
      </div>
      {/* todo: ingridients */}
      <ul></ul>
      <p className="leading-8">
        <BreakString text={r?.method || ""} />
      </p>
      {/* created and updated */}
      <div>
        <p>
          <span className="font-semibold">Created at: </span>
          {formattedCreated}
        </p>
        {formattedCreated !== formattedUpdated && (
          <p>
            <span className="font-semibold">Updated At: </span>
            {formattedUpdated}
          </p>
        )}
      </div>
      {userId == r?.userId && (
        <Button
          color={"dark"}
          className="w-3/12"
          onClick={() => navigate(`/edit-recipe/${r?._id}`)}
        >
          Edit Recipe
        </Button>
      )}
      {(isAdmin || isUser) && (
        <Button
          color={"dark"}
          className="w-3/12"
          onClick={() => deleteRecipe()}
        >
          Delete Recipe
        </Button>
      )}
    </Card>
  );
};

export default RecipePage;
