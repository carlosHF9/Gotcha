import styled from "@emotion/styled";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Button, OutlinedInput } from "@mui/material";
import { FC } from "react";

const PostTitle = styled("h2")(() => ({
  fontWeight: "normal",
  margin: "0",
}));

const CheaterName = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#EB5757",
  color: "white",
  padding: "8px 23px",
  borderRadius: "20px",
}));

const ReadPostButton = styled(Button)(() => ({
  borderRadius: "20px",
}));

const PostedBy = styled("span")(() => ({
  color: "#696969",
  marginTop: "12px",
}));

const PostDescription = styled("p")(() => ({}));

const Post: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        alignItems: "start",
        alignSelf: "start",
        marginTop: "30px",
        maxWidth: "600px",
      }}
    >
      <PostTitle>Some information to fill the post title</PostTitle>
      <PostedBy>
        Por <b>Carlos Frey</b>, 26 de Março de 2015 às 12:35
      </PostedBy>
      <PostDescription>
        Aqui há uma breve descrição que será responsável por corresponder com o
        que foi colocar no título. Aqui há uma breve descrição que será
        responsável por corresponder com o que foi colocar no título.
      </PostDescription>
      <Box sx={{ display: "flex", justifyContent: "start", gap: "10px" }}>
        <ReadPostButton variant="contained">Read entire post</ReadPostButton>
        <CheaterName>
          <ErrorIcon />
          Mutu
        </CheaterName>
      </Box>
    </Box>
  );
};

export default Post;
