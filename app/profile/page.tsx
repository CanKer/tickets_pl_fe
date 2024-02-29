"use client";
import Button from "@material-tailwind/react/components/Button";
import { validationSchema } from "../register/schema";
import { useFormik } from "formik";
import Input from "@material-tailwind/react/components/Input";
import Typography from "@material-tailwind/react/components/Typography";
import Sidebar from "../components/sidebar";
import { useState } from "react";

export default function Page() {
  const [collapse, setCollapse] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "annakowalska@gmail.com",
      password: "123456",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Sidebar collapse={collapse} setCollapse={setCollapse} />
      <div
        className={
          collapse
            ? "w-[calc(100vw_-_5rem)] ml-20"
            : "w-[calc(100vw_-_20rem)] ml-80"
        }
      >
        <div className="w-[80%] lg:w-[60%] xl:w-[50%] py-24 mx-auto">
          <Typography
            placeholder="Update your profile"
            variant="h4"
            className="mb-12"
          >
            Update your profile
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
            <Button placeholder="Save" fullWidth type="submit">
              Save
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
