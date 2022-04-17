import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AccesForbiden } from "../components";
import { verifyAdmin } from "../functions/auth";
import CircularProgress from "@mui/material/CircularProgress";

const AdminRoutes = () => {
  const [adminCheck, setadminCheck] = useState(null);

  useEffect(() => {
    verifyAdmin()
      .then((res) => {
        setadminCheck(res.data.ok);
      })
      .catch((err) => {
        setadminCheck(false);
      });
  }, []);

  if (adminCheck === null) {
    return (
      <div
        style={{
          position: "absolute",
          top: "43%",
          left: "45%",
        }}
      >
        <CircularProgress size={"6em"} />
      </div>
    );
  }
  return adminCheck ? <Outlet /> : <AccesForbiden />;
};

export default AdminRoutes;
