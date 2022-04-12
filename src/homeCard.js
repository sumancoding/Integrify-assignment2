import React from "react";
import { Link, Outlet } from "react-router-dom";

import { Card, CardActions, CardContent, Typography } from "@mui/material";

const HomeCard = ({ item }) => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 300, backgroundColor: "#CDCDCD" }}>
      <CardContent>
        <Typography>{item.name}</Typography>
        <Typography>{item.brewery_type}</Typography>
        <Typography>{item.city}</Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: "#C898F2" }}>
        <Link style={{ textDecoration: "none" }} to={`/${item.id}`}>
          <Typography>View Details</Typography>
        </Link>
        <Outlet />
      </CardActions>
    </Card>
  );
};

export default HomeCard;
