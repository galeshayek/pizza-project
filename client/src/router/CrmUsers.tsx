/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Avatar, Badge, Button, Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { userService } from "../service/users";
import { IUser } from "../@types/types.user";
import { userUrl } from "../service/url";
import formatDate from "../utils/formateDate";

const CrmUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const jwt = localStorage.getItem("jwt") || "";
  const [u, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    userService.getAll(jwt).then((r) => {
      setUsers(r.data);
    });
  }, [jwt]);

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
        <ul className="flex w-11/12 justify-between border-b px-2  py-2 text-xl font-semibold shadow *:w-3/12 *:text-center">
          <li>Info</li>
          <li>Added at</li>
          <li>Actions</li>
        </ul>
        {u.slice(currentPage, currentPage + 3).map((u) => (
          <div
            className="flex w-11/12 items-center justify-between rounded-lg border px-2"
            key={u._id}
          >
            <div className="flex w-5/12 gap-8">
              <Avatar
                className="aspect-square"
                img={`${userUrl}${u.image}` || "/assets/images/pizzaLogin.png"}
                alt="user profile image"
              />
              <div className="">
                <p>{`${u.name.first} ${u.name.last}`}</p>
                <p className="text-sm text-gray-600">{u.email}</p>
              </div>
            </div>
            <p className="w-2/12 text-center text-md">
              {formatDate(u.createdAt)}
            </p>
            <div className="flex w-5/12 justify-end">
              <Button className="" onClick={() => deleteUser(u?._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={u.length - 3}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default CrmUsers;
