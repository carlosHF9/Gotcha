import { FC } from "react";
import { OutlinedInput, styled } from "@mui/material";
import { Search } from "@mui/icons-material";
import Box from "@mui/material/Box";
import GenericList from "../gerenic-list/index";

const IconForSearch = styled(Search)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "13px",
  borderRadius: "50%",
  color: "white",
}));

const TabSearch: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          alignSelf: "start",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <OutlinedInput
          sx={{
            borderRadius: "30px",
          }}
          placeholder="Buscar . . ."
        />
        <IconForSearch />
      </Box>
      <GenericList listType="posts" />
      <Box></Box>
    </Box>
  );
};

export default TabSearch;
