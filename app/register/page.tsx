"use client";
import { useFormState } from "react-dom";
import concert from "../../public/concert.jpg";
import { createUser } from "../actions";
import { Input, Typography, Button } from "../mtComponents";
import { useForm } from "react-hook-form";
import { LegacyRef, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";

const initialState = {
  error: "",
};

export default function Page() {
  const [state, formAction] = useFormState(createUser, initialState);
  const { pending } = useFormStatus();

  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    formAction(new FormData(formRef?.current));
    reset();
  };

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-[100%]">
      <div
        className="bg-cover bg-no-repeat bg-center col-span-2 hidden md:block"
        style={{ backgroundImage: `url(${concert.src})` }}
      />
      <div className="col-span-3 p-6 w-[90%] sm:w-[70%] xl:w-[60%] m-auto">
        <Typography
          placeholder="Create your account"
          variant="h3"
          className="mb-12"
        >
          Create your account
        </Typography>
        <Typography
          placeholder="Already have an account?"
          variant="lead"
          className="mb-12"
        >
          Already a user?{" "}
          <a href="#" className="text-[#661C11]">
            Login
          </a>
        </Typography>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Input
              variant="outlined"
              label="Email"
              id="email"
              crossOrigin=""
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="text-xs text-red-500">This is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-xs text-red-500">Wrong format</p>
            )}
          </div>
          <div className="mb-12">
            <Input
              variant="outlined"
              label="Password"
              type="password"
              id="password"
              crossOrigin=""
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-xs text-red-500">This is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="text-xs text-red-500">
                Password must be 6 or more characters long
              </p>
            )}
          </div>
          <Button
            placeholder="Sign up"
            fullWidth
            type="submit"
            disabled={pending}
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}
