import { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import PaladinsLogo from "../../assets/img/pala-2.png";

const PaladinsImage = styled("img")(() => ({
  width: "50px",
}));
const CustomSpan = styled("span")(({ theme }) => ({
  fontWeight: "light",
  fontSize: "1.1rem",
  color: theme.palette.primary.main,
}));

const GotchaLogo: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "start",
        marginTop: "5px",
      }}
    >
      <PaladinsImage src={PaladinsLogo} />
      <CustomSpan>Gotcha!</CustomSpan>
    </Box>
  );
};

export default GotchaLogo;
