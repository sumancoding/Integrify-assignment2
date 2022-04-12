import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import BackButton from "./backButton";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${params.cardId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Stack
        spacing={3}
        sx={{
          mt: "200px",
          width: "100%",
          height: "100vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Item details</Typography>
        <Card sx={{ minWidth: 500, maxWidth: 600, backgroundColor: "#C898F2" }}>
          {/* CardDetail : {params.item.id} */}
          <CardContent>
            <Typography>{item.name}</Typography>
            <Typography>{item.brewery_type}</Typography>
            <Typography>{item.street}</Typography>
            <Typography>{item.city}</Typography>
            <Typography>{item.state}</Typography>
            <Typography>{item.postal_code}</Typography>
            <Typography>{item.country}</Typography>
            <Typography>{item.phone}</Typography>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#808080" }}>
            <BackButton />
          </CardActions>
        </Card>
      </Stack>
    );
  }
  // let params = useParams();

  // return (
  //   <Card sx={{ minWidth: 250, maxWidth: 300 }}>
  //     {/* CardDetail : {params.item.id} */}
  //     <CardContent>
  //       <Typography>this</Typography>
  //       {/* <Typography>{item.name}</Typography>
  //       <Typography>{item.brewery_type}</Typography>
  //       <Typography>{item.street}</Typography>
  //       <Typography>{item.city}</Typography>
  //       <Typography>{item.state}</Typography>
  //       <Typography>{item.postal_code}</Typography>
  //       <Typography>{item.country}</Typography>
  //       <Typography>{item.phone}</Typography> */}
  //     </CardContent>
  //     <CardActions sx={{ backgroundColor: "#808080" }}>
  //       <BackButton />
  //     </CardActions>
  //   </Card>
  // );
};

export default CardDetail;
