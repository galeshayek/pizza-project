import { Button } from "flowbite-react";
import { IMyCard } from "../@types/types";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { IUser } from "../@types/types.user";
import { useContext, useEffect, useState } from "react";
import { userService } from "../service/users";
import { recipeSerivce } from "../service/recipe";
import { AuthContext } from "../contexts/AuthContext";
import { FavContext } from "../contexts/FavContext";

const MyCard: IMyCard = ({ title, description, image, id }) => {
  const { toggle } = useContext(FavContext);

  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt") || "";
  const { user } = useContext(AuthContext);
  const me: IUser = user;
  const { _id } = me;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (_id) {
          const res = await userService.getUserById(_id, jwt);
          setIsFav(res.data.favorites.includes(id as string));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [_id, id, jwt]);

  const handleFav = async () => {
    try {
      if (isFav) {
        await recipeSerivce.addFav(jwt, id as string);
        setIsFav(false);

        toggle(id as string);
      } else {
        await recipeSerivce.addFav(jwt, id as string);
        setIsFav(true);
        toggle(id as string);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="relative flex h-full max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <button onClick={() => handleFav()} className="absolute right-4 text-3xl">
        {isFav ? (
          <span className=" text-amber-500">
            <FaBookmark />
          </span>
        ) : (
          <FaRegBookmark />
        )}
      </button>
      <img className="aspect-video shadow" src={`${image}`} alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="line-clamp-2 font-normal text-gray-700  dark:text-gray-400">
        {description}
      </p>
      <Button
        onClick={() => navigate(`/recipe/single/${id}`)}
        color={"failure"}
      >
        Read More
      </Button>
    </div>
  );
};

export default MyCard;
