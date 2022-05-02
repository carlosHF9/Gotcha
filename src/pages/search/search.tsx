import { Box, Button, Container, Input, LinearProgress } from "@mui/material";
import { FC, useState } from "react";
import LoginRegister from "../../components/login-register/login-register";
import PaladinsLogo from "../../assets/img/pala-2.png";
import { styled } from "@mui/system";
import { LoadingButton } from "@mui/lab";

const CustomInput = styled(Input)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
}));

const CustomParagraph = styled("p")(({ theme }) => ({
  color: "darkgray",
}));

const CustomH1 = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: "0",
}));

const ContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  paddingTop: "15px",
};

const SearchBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
};

const SearchButtonsBoxStyle = {
  display: "flex",
  gap: "20px",
  paddingTop: "30px",
};

const ButtonStyle = {
  borderRadius: "20px",
  padding: "8px 22px",
};

const imgStyle = {
  width: "100%",
  maxWidth: "160px",
};

const Search: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container sx={ContainerStyle} maxWidth={false}>
      <LoginRegister isLoggedin={true} />
      <Box sx={SearchBoxStyle}>
        <img style={imgStyle} src={PaladinsLogo} />
        <CustomH1>Gotcha!</CustomH1>
        <CustomParagraph>
          A not oficial Paladins cheater Database
        </CustomParagraph>

        <CustomInput placeholder="Find a cheater" value="nice" />
        <Box sx={SearchButtonsBoxStyle}>
          <LoadingButton
            onClick={() => setIsLoading(!isLoading)}
            loading={isLoading}
            sx={ButtonStyle}
            variant="contained"
          >
            Search
          </LoadingButton>
          <Button>I'm unlucky</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Search;
