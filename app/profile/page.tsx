"use client";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import { Typography } from "../mtComponents";

export default function Page() {
  const [collapse, setCollapse] = useState(false);

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
        </div>
      </div>
    </>
  );
}
