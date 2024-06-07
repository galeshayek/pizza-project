/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Avatar, Badge, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userService } from "../service/users";
import { IUser } from "../@types/types.user";

const CrmUsers = () => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt") || "";
  const [u, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    userService.getAll(jwt).then((r) => {
      setUsers(r.data);
    });
  }, [jwt]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  //deleteRecipe
  const deleteUser = async (id: string) => {
    try {
      if (id && jwt) {
        Swal.fire({
          title: "Are you sure?",
          text: "This action is irreversible",
          icon: "warning",
          showCancelButton: true,
        }).then(() => {
          userService
            .delete(id, jwt)
            .then((r) => console.log(r))
            .catch((e) => console.log(e));
          userService.getAll(jwt).then((r) => {
            setUsers(r.data);
          });
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
      <Badge className="m-4  flex w-3/12 justify-center text-3xl">Users</Badge>
      <div className="flex flex-col gap-4 py-4 pl-2">
        {u.map((u) => (
          <div
            className="flex w-11/12 items-center justify-between rounded-lg border px-2"
            key={u._id}
          >
            <Avatar
              className="w-1/12"
              img={u.image || "/assets/images/pizzaLogin.png"}
              alt=""
            />
            <div className="line-clamp-3 w-6/12 ">
              <h4>{`${u.name.first} ${u.name.last}`}</h4>
              <p className="text-gray-600">{u.email}</p>
            </div>
            <p className="w-3/12 text-md">{formatDate(u.createdAt)}</p>

            <Button onClick={() => deleteUser(u?._id)}>Delete</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CrmUsers;
