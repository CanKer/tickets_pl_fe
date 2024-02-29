"use client";
import Button from "@material-tailwind/react/components/Button";
import { validationSchema } from "./schema";
import { useFormik } from "formik";
import Input from "@material-tailwind/react/components/Input";
import Typography from "@material-tailwind/react/components/Typography";
import concert from "../../public/concert.jpg";

export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6">
            <Input
              variant="outlined"
              label="Email"
              id="email"
              type="email"
              value={formik.values.email}
              required
              onChange={formik.handleChange}
              crossOrigin=""
            />
          </div>
          <div className="mb-12">
            <Input
              variant="outlined"
              label="Password"
              id="password"
              type="password"
              value={formik.values.password}
              required
              onChange={formik.handleChange}
              crossOrigin=""
            />
          </div>
          <Button placeholder="Sign up" fullWidth type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}
