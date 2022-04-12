import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SearchBar = ({ items, setItems }) => {
  const [q, setQ] = useState("");

  useEffect(() => {
    if (q != "") {
      setItems(
        items.filter(({ name, city, brewery_type, state }) => {
          return name.includes(q);
        })
      );
    } else {
      setItems(items);
    }
  }, [q]);

  const handleChange = (event) => {
    setQ(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        label="Search by Name.."
        sx={{ width: "1200px", mr: 2, backgroundColor: "#F7F7F7" }}
        value={q}
        onChange={handleChange}
      />{" "}
      <Typography> Search Brewery</Typography>
    </Box>
  );
};

export default SearchBar;
