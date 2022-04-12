import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import CardDetail from "./cardDetail";
import HomeCard from "./homeCard";
import SearchBar from "./searchBar";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [showItems, setShowItems] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setShowItems(result);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">HomePage</Typography>
        <hr />
        <SearchBar items={items} setItems={setShowItems} />
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          container
          spacing={2}
        >
          {showItems.map((i, idx) => (
            <Grid item xs={4}>
              <HomeCard key={idx} item={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};

export default HomePage;
