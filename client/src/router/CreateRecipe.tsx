/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  Badge,
  Button,
  Label,
  Radio,
  RangeSlider,
  TextInput,
  Textarea,
} from "flowbite-react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { ICreateRecipe } from "../@types/types.recipe";
import { useState } from "react";
import { recipeSerivce } from "../service/recipe";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const [amount, setAmount] = useState(1);
  const [portions, setPortions] = useState(1);

  //hook form
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm<ICreateRecipe>({
    defaultValues: {
      ingredients: [""],
      //@ts-ignore
      "info.portions": 1,
      "info.amount": 1,
    },
  });
  const onSubmit: SubmitHandler<ICreateRecipe> = (data) => {
    if (data.ingredients.length <= 2) {
      setError("root", { message: "Please add ingredients" });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { description, info, ingredients, method, title, ...rest } = data;
    const filteredData = { description, info, ingredients, method, title };
    console.log(filteredData);
    if (jwt) {
      recipeSerivce
        .createRecipe(jwt, filteredData)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            reset();
            Swal.fire({
              title: "Recipe created succesfully",
              icon: "success",
              confirmButtonText: "Go to your Recipes",
            }).then((res) => {
              if (res.isConfirmed) {
                navigate("/my-recipes");
              }
            });
          }
        })
        .catch((e) => {
          console.log(e);
          setError("root", { message: e.response.data.message });
        });
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    //@ts-ignore
    name: "ingredients",
  });

  return (
    <section className="mt-10 md:px-24">
      <h2 className="mb-5 text-primary max-md:text-center">
        Share your awsom recipe
      </h2>
      <form
        className="flex w-8/12 flex-col gap-6 max-md:mx-auto md:ml-10"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            id="title"
            type="text"
            placeholder="Title"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors.title?.message ? (
            <Badge color={"warning"}>{errors.title?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.title?.message}
            </Badge>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="Description" value="Description" />
          </div>
          <TextInput
            id="Description"
            type="text"
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description?.message ? (
            <Badge color={"warning"}>{errors.description?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.description?.message}
            </Badge>
          )}
        </div>

        <div className="w-full">
          <div className="mb-1 mt-3  flex gap-2">
            <Label htmlFor="range" value="Ingridients" />
            <Badge color={"failure"}>{amount}</Badge>
          </div>
          <RangeSlider
            min={1}
            max={50}
            className="w-full"
            {...register("info.amount", {
              required: "Amount is required",
              onChange: (e) => setAmount(e.target.value),
            })}
          />
          {errors.info?.amount?.message ? (
            <Badge color={"warning"}>{errors.info?.amount?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.info?.amount?.message}
            </Badge>
          )}
        </div>

        <div>
          <div className="mb-4 block">
            <Label htmlFor="Time" value="Time" />
          </div>
          <TextInput
            id="Time"
            type="text"
            placeholder="Time"
            {...register("info.time", {
              required: "Time is required",
            })}
          />
          {errors.info?.time?.message ? (
            <Badge color={"warning"}>{errors.info?.time?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.info?.time?.message}
            </Badge>
          )}
        </div>
        <div className="flex gap-40">
          <fieldset className="mt-4 flex max-w-md  gap-4">
            <legend className="mb-4 text-center">Level</legend>
            <div className="flex items-center gap-2">
              <Radio
                id="easy"
                value="easy"
                {...register("info.level", {
                  required: "Feild is required",
                })}
              />
              <Label htmlFor="easy">Easy</Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                id="medium"
                value="medium"
                defaultChecked
                {...register("info.level", {
                  required: "Feild is required",
                })}
              />
              <Label htmlFor="medium">Medium</Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                id="hard"
                value="hard"
                {...register("info.level", {
                  required: "Feild is required",
                })}
              />
              <Label htmlFor="hard">Hard</Label>
            </div>
            {errors.info?.level?.message ? (
              <Badge color={"warning"}>{errors.info?.level?.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.info?.level?.message}
              </Badge>
            )}
          </fieldset>

          <fieldset className="mt-4 flex max-w-md  gap-4">
            <legend className="mb-4 text-center">Category</legend>
            <div className="flex items-center gap-2">
              <Radio
                id="Dough"
                value="dough"
                defaultChecked
                {...register("info.category", {
                  required: "Feild is required",
                })}
              />
              <Label htmlFor="Dough">Dough</Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                id="Suace"
                value="sauce"
                {...register("info.category", {
                  required: "Feild is required",
                })}
              />
              <Label htmlFor="Suace">Sauce</Label>
            </div>

            <div className="flex items-center gap-2">
              <Radio
                id="Toppings"
                value="topping"
                {...register("info.category", {
                  required: "Feild is required",
                })}
              />
              <Label htmlFor="Topping" value="Topping">
                Toppings
              </Label>
            </div>
            {errors.info?.category?.message ? (
              <Badge color={"warning"}>{errors.info?.category?.message}</Badge>
            ) : (
              <Badge color={"warning"} className="opacity-0">
                {errors.info?.category?.message}
              </Badge>
            )}
          </fieldset>
        </div>

        <div className="md:w-4/12">
          <div className="mb-1 mt-3  flex gap-2">
            <Label htmlFor="range" value="Portions" />
            <Badge color={"failure"}>{portions}</Badge>
          </div>
          <RangeSlider
            min={1}
            max={10}
            className="w-full"
            {...register("info.portions", {
              required: "Portions is required",
              onChange: (e) => setPortions(e.target.value),
            })}
          />
          {errors.info?.portions?.message ? (
            <Badge color={"warning"}>{errors.info?.portions?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.info?.portions?.message}
            </Badge>
          )}
        </div>

        <div>
          {fields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <div className="mb-2 block">
                <Label
                  htmlFor={`ingredient[${index}]`}
                  value={`ingredient ${index + 1}`}
                />
              </div>
              <div className="flex gap-3 max-md:flex-col">
                <TextInput
                  className="md:w-4/12"
                  type="text"
                  id={`ingredient[${index}]`}
                  {...register(`ingredients.${index}`, {
                    required: "Ingridents are required",
                  })}
                  placeholder={`Add ingredient`}
                />
                {errors.ingredients?.message ? (
                  <Badge color={"warning"}>{errors.ingredients?.message}</Badge>
                ) : (
                  <Badge color={"warning"} className="opacity-0">
                    {errors.ingredients?.message}
                  </Badge>
                )}
                <Button type="button" onClick={() => remove(index)} color="red">
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append("")}
            className="mb-4 max-md:mx-auto"
          >
            Add an ingredient
          </Button>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="Method" value="Method" />
          </div>
          <Textarea
            id="Method"
            rows={6}
            placeholder="Write the method..."
            {...register("method", {
              required: "Method is required",
            })}
          />
          {errors.method?.message ? (
            <Badge color={"warning"}>{errors.method?.message}</Badge>
          ) : (
            <Badge color={"warning"} className="opacity-0">
              {errors.method?.message}
            </Badge>
          )}
        </div>
        {errors.root && (
          <Badge color={"warning"} className="flex justify-center">
            {errors.root.message}
          </Badge>
        )}
        <Button type="submit" color={"success"} className="mx-auto mb-10 w-32">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default CreateRecipe;
