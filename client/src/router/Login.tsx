/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */

import { Badge, Button, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { closeSideBarContext } from "../contexts/closeSideBar";
import { SubmitHandler, useForm } from "react-hook-form";
import { Ilogin } from "../@types/types.forms";
import { emailRegex } from "../validation/patterns";
import { userService } from "../service/users";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { toggle } = useContext(closeSideBarContext);
  const { login } = useContext(AuthContext);
  const [loginError, setloginError] = useState();
  useEffect(() => {
    toggle(true);
  }, []);

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Ilogin>();
  const onSubmit: SubmitHandler<Ilogin> = async (data) => {
    try {
      const res = await userService.login(data);
      console.log(res.status);
      if (res.status === 200) {
        login(res.data);
        setloginError(undefined);
        reset();
        navigate("/");
      }
    } catch (e) {
      //@ts-ignore
      if (e) setloginError("Email or Password are incorrect");
    }
  };

  return (
    <div className="grid w-full grid-cols-2 items-center *:h-screen">
      <div className="flex flex-col justify-center gap-8 bg-primary px-20 text-oposite max-md:hidden ">
        <img
          className="mx-auto h-3/6"
          src="/assets/images/pizzaLogin.png"
          alt="pizza slice illustration"
        />
        <h2 className="font-semibold">PizzaMaster, the ultimate recipe hub.</h2>
        <p className="font-light">
          Discover, create, and share delicious pizza recipes.
        </p>
      </div>

      <div className="m-auto flex w-7/12 flex-col justify-center max-md:col-span-2">
        <h3 className="pb-4">Login</h3>
        <form
          className="flex max-w-md flex-col gap-4"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: emailRegex,
                  message: "Invalid pattern",
                },
              })}
            />
            {errors.email?.message ? (
              <Badge color={"warning"}>{errors.email?.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.email?.message}
              </Badge>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              autoComplete="current-password"
              helperText={
                <>
                  Don't have an Account?
                  <Link
                    to={"/register"}
                    className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Register
                  </Link>
                  .
                </>
              }
              {...register("password", {
                required: "password is required",
              })}
            />
            {errors.password?.message ? (
              <Badge color={"warning"} className="mt-1">
                {errors.password?.message}
              </Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.password?.message}
              </Badge>
            )}
          </div>

          <Button color="failure" className="bg-primary" type="submit">
            Submit
          </Button>
          {loginError && (
            <Badge color={"warning"} className="flex justify-center">
              {loginError}
            </Badge>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
