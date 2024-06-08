/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Button, FileInput, Label } from "flowbite-react";
import { IUploadImg } from "../@types/types.user";
import { SubmitHandler, useForm } from "react-hook-form";
import { userService } from "../service/users";
import { jwtDecode } from "jwt-decode";
import { JwtDecodeType } from "../@types/types";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const UploadUserImage = () => {
  const { login } = useContext(AuthContext);

  function isEnglish(text) {
    const englishRegex = /^[A-Za-z0-9.,?!'"\s]+$/;
    return englishRegex.test(text);
  }
  const jwt = localStorage.getItem("jwt") || "";

  const { _id } = jwtDecode(jwt) as JwtDecodeType;

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IUploadImg>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<IUploadImg> = async (data) => {
    const formData = new FormData();
    formData.append("avatar", data.image[0]);
    //@ts-ignore
    const formName = formData.get("avatar").name;
    if (isEnglish(formName) === false) {
      setError("root", {
        type: "manual",
        message: "Image name must be in english",
      });
    } else {
      userService
        .uploadImage(jwt, _id, formData)
        .then(() => {
          Swal.fire({
            title: "Image Uploaded",
            icon: "success",
            timer: 1700,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          reset();
          login(jwt);
        })
        .catch((e) => {
          setError("root", {
            type: "manual",
            message: e.response.data.message,
          });
        });
    }
  };

  return (
    <form
      noValidate
      className="ml-10 mt-10 flex w-8/12 flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Update Profile photo" />
        </div>
        <FileInput
          id="file-upload"
          {...register("image", {
            required: "Image is required",
          })}
        />
        {errors.image?.message ? (
          <Badge color={"warning"}>{errors.image.message}</Badge>
        ) : (
          <Badge color={"warning"} className="opacity-0">
            {errors.image?.message}
          </Badge>
        )}
      </div>
      {errors.root && (
        <Badge className="flex justify-center" color={"warning"}>
          {errors.root.message}
        </Badge>
      )}
      <Button className="mx-auto w-32" color={"dark"} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default UploadUserImage;
