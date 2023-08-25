import React, { useEffect, useState } from "react";
import { ILocalStorageCharacter } from "@/types/models";
import { getFavouritesFromLocalStorage } from "@/utils/storage";
import { List, ListItem } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Box from "@mui/material/Box";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const Favourite = () => {
  const [localStorageCharacters, setLocalStorageCharacters] = useState<
    ILocalStorageCharacter[]
  >([]);
  useEffect(() => {
    setLocalStorageCharacters(getFavouritesFromLocalStorage());
  }, []);

  const orderCharectersByDate = (order: "asc" | "desc") => {
    const dateDescending = [...localStorageCharacters].sort((a, b) =>
      order === "asc" ? a.date - b.date : b.date - a.date,
    );
    setLocalStorageCharacters(dateDescending);
  };

  const orderByDescending = () => {
    orderCharectersByDate("desc");
  };

  const orderByAscending = () => {
    orderCharectersByDate("asc");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <ArrowDropDownRoundedIcon
          onClick={orderByDescending}
          fontSize="large"
          sx={{ color: "darkgrey" }}
        />
        <ArrowDropUpRoundedIcon
          onClick={orderByAscending}
          fontSize="large"
          sx={{ color: "darkgrey" }}
        />
      </Box>
      <List
        sx={{
          marginTop: "50px",
        }}
      >
        {localStorageCharacters.map(({ id, name }) => (
          <ListItem
            sx={{
              color: "#0b2154",
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "Modern No. 20",
            }}
            key={id}
          >
            <ElectricBoltIcon sx={{ color: "#8a1212" }} key={id} />
            {name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Favourite;
