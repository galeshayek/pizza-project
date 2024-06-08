import { Badge, Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdateUser, IUser } from "../@types/types.user";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import UploadUserImage from "../components/UploadUserImage";
import { userService } from "../service/users";
import { jwtDecode } from "jwt-decode";
import { JwtDecodeType } from "../@types/types";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, login } = useContext(AuthContext);
  const jwt = localStorage.getItem("jwt") || "";
  const { _id } = jwtDecode(jwt) as JwtDecodeType;
  const Iuser: IUser = user;
  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IUpdateUser>({
    defaultValues: {
      name: {
        first: Iuser?.name.first,
        last: Iuser?.name.last,
      },
      phone: Iuser?.phone,
    },
  });
  const onSubmit: SubmitHandler<IUpdateUser> = async (data) => {
    userService
      .update(_id, jwt, data)
      .then(() => {
        Swal.fire({
          title: "Profile Updated",
          icon: "success",
          timer: 1700,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        login(jwt);
        reset({
          name: {
            first: data?.name.first,
            last: data?.name.last,
          },
          phone: data?.phone,
        });
      })
      .catch((e) => {
        setError("root", { type: "manual", message: e.response.data.message });
      });
  };
  return (
    <>
      <form
        noValidate
        className="mt-10 flex w-8/12 flex-col gap-6 max-md:mx-auto md:ml-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstName" value="First Name" />
          </div>
          <TextInput
            id="firstName"
            type="text"
            placeholder="First Name"
            autoComplete="given-name"
            {...register("name.first", {
              required: "First Name is required",
            })}
          />
          {errors.name?.first?.message ? (
            <Badge color={"warning"}>{errors.name.first?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.name?.first?.message}
            </Badge>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastName" value="Last Name" />
          </div>
          <TextInput
            id="lastName"
            type="text"
            placeholder="Last Name"
            autoComplete="family-name"
            {...register("name.last", {
              required: "Last Name is required",
            })}
          />
          {errors.name?.last?.message ? (
            <Badge color={"warning"}>{errors.name.last?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.name?.last?.message}
            </Badge>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <TextInput
            id="phone"
            type="text"
            placeholder="Phone"
            autoComplete="tel"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          {errors.phone?.message ? (
            <Badge color={"warning"}>{errors.phone?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.phone?.message}
            </Badge>
          )}
        </div>
        {errors.root && (
          <Badge className="flex justify-center" color={"warning"}>
            {errors.root.message}
          </Badge>
        )}
        <Button className="mx-auto w-32" color={"failure"} type="submit">
          Submit
        </Button>
      </form>
      <UploadUserImage />
    </>
  );
};

export default Profile;
