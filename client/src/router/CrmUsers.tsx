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
import useWindowSize from "../hooks/useWindowSize";

const CrmUsers = () => {
  const { width, md } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const jwt = localStorage.getItem("jwt") || "";
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    userService.getAll(jwt).then((r) => {
      setUsers(r.data);
    });
  }, [jwt]);

  const makeAdmin = async (id: string) => {
    try {
      await userService.changeRole(jwt, id, { set: "10" });
      Swal.fire({
        title: "Admin role added",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1700,
      }).then(() => {
        userService.getAll(jwt).then((r) => {
          setUsers(r.data);
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  //remove admin
  const removeAdmin = async (id: string) => {
    try {
      await userService.changeRole(jwt, id, { set: "0" });
      Swal.fire({
        title: "Admin role removed",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1700,
      }).then(() => {
        userService.getAll(jwt).then((r) => {
          setUsers(r.data);
        });
      });
    } catch (e) {
      console.log(e);
    }
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

  //set pages in pagination]
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
      <Badge className="m-4  flex w-3/12 justify-center text-3xl">Users</Badge>
      <div className="flex flex-col gap-4 py-4 md:pl-2">
        <ul className="flex justify-between border-b px-2 py-2  text-xl font-semibold shadow *:w-3/12 *:text-center md:w-11/12">
          <li>Info</li>
          <li>Added at</li>
          <li>Actions</li>
        </ul>
        {users.slice(pageNum, pageNum + 3).map((u) => (
          <div
            className="flex items-center justify-between rounded-lg border px-2 max-md:mx-2 max-md:flex-col md:w-11/12 "
            key={u._id}
          >
            <Badge className="mr-2">{users.indexOf(u)}</Badge>
            <div className="flex gap-8 max-md:py-2 md:w-5/12">
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
            <p className="text-center text-md md:w-2/12">
              {formatDate(u.createdAt)}
            </p>
            <div className="flex gap-2 max-md:pb-2 md:w-5/12 md:justify-end">
              {u.role == 0 && (
                <Button className="" onClick={() => makeAdmin(u._id)}>
                  Make Admin
                </Button>
              )}
              {u.role == 10 && (
                <Button outline className="" onClick={() => removeAdmin(u._id)}>
                  Remove Admin
                </Button>
              )}
              <Button className="" onClick={() => deleteUser(u?._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex  justify-center overflow-x-auto pb-8">
        <Pagination
          onClick={() =>
            window.scrollTo({ behavior: "instant", top: 100, left: 0 })
          }
          layout={width >= md ? "pagination" : "table"}
          currentPage={currentPage}
          totalPages={Math.ceil(users.length / 3)}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default CrmUsers;
