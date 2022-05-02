import { FC } from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import Post from "../post";

interface GenericListType {
  listType: String;
}

const ListTitle = styled("h2")(() => ({
  alignSelf: "start",
}));

const GenericList: FC<GenericListType> = (props: GenericListType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "start",
        marginBottom: "60px",
      }}
    >
      <ListTitle>Title</ListTitle>
      <Box>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>

      <Pagination
        sx={{
          marginTop: "30px",
        }}
        size="large"
        count={5}
        variant="outlined"
      />
    </Box>
  );
};

export default GenericList;
