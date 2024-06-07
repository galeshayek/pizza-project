import { Badge, Button, Label, TextInput } from "flowbite-react";
import { useContext, useEffect } from "react";
import { closeSideBarContext } from "../contexts/closeSideBar";
import { SubmitHandler, useForm } from "react-hook-form";
import { Iregister } from "../@types/types.forms";
import { emailRegex, passwordRegex, phoneRegex } from "../validation/patterns";
import { userService } from "../service/users";
import AuthContext from "../contexts/AuthContext";

export const Register = () => {
  const { toggle } = useContext(closeSideBarContext);
  // eslint-disable-next-line no-empty-pattern
  const {} = useContext(AuthContext);
  useEffect(() => {
    toggle(true);
  }, []);

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Iregister>();
  const onSubmit: SubmitHandler<Iregister> = async (data) => {
    try {
      const res = await userService.register(data);
      console.log(res.status);
      if (res.status === 200) {
        login(res.data);
        setloginError(undefined);
        reset();
        navigate("/");
      }
    } catch (e) {
      //@ts-ignore
      if (e.response.status === 401) setloginError(e.response.data.message);
    }
  };
  return (
    <div className="grid w-full  grid-cols-2 items-center *:h-screen">
      <div className=" m-auto flex w-7/12 flex-col justify-center">
        <h3 className="pb-4">Register</h3>
        <form
          className="flex max-w-md flex-col gap-4"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Your First Name" />
            </div>
            <TextInput
              id="firstName"
              type="text"
              placeholder="First Name"
              autoComplete="given-name"
              {...register("name.first", {
                required: "Name is required",
              })}
            />
            {errors.name?.first?.message ? (
              <Badge color={"warning"}>{errors.name?.first?.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.name?.first?.message}
              </Badge>
            )}
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Your Last Name" />
            </div>
            <TextInput
              id="lastName"
              type="text"
              placeholder="Last Name"
              autoComplete="family-name"
              {...register("name.last", {
                required: "Last name is required",
              })}
            />
            {errors.name?.last?.message ? (
              <Badge color={"warning"}>{errors.name?.last?.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.name?.last?.message}
              </Badge>
            )}

            <div className="mb-2 block">
              <Label htmlFor="Phone Number" value="Your Phone Number" />
            </div>
            <TextInput
              id="Phone Number"
              type="text"
              placeholder="Phone Number"
              autoComplete="tel"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: phoneRegex,
                  message: "Invalid pattern",
                },
              })}
            />
            {errors.phone?.message ? (
              <Badge color={"warning"}>{errors.phone.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.phone?.message}
              </Badge>
            )}

            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
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
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: passwordRegex,
                  message: "Invalid pattern",
                },
              })}
            />
            {errors.password?.message ? (
              <Badge color={"warning"}>{errors.password?.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.password?.message}
              </Badge>
            )}
          </div>

          <Button color="failure" className="bg-primary" type="submit">
            Submit
          </Button>
        </form>
      </div>

      <div className=" flex flex-col justify-center gap-8 bg-primary px-20 text-oposite ">
        <img
          className="mx-auto h-3/6"
          src="/assets/images/pizzaLogin.png"
          alt=""
        />
        <h2 className="font-semibold">PizzaMaster, the ultimate recipe hub.</h2>
        <p className="font-light">
          Join us to explore delicious pizza recipes and cooking techniques.
        </p>
      </div>
    </div>
  );
};
