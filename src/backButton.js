import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Button sx={{ width: "100%" }}>
      <Link style={{ textDecoration: "none" }} to={`/`}>
        <Typography align="center" color="#fff">
          Go Back
        </Typography>{" "}
      </Link>
    </Button>
  );
};

export default BackButton;
