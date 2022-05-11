import { FC, useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Button, Input, Chip, Paper } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ReactQuill from "react-quill";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "react-quill/dist/quill.snow.css";

const chipsInitialState = ["Cheating", "Toxic", "Hacking", "Aimbot"];

const boxPerFieldStyle = {
  display: "flex",
  flexDirection: "column",
  alignSelf: "start",
  marginTop: "0px",
  width: "100%",
  maxWidth: "500px",
  flexWrap: "no-wrap",
  alignItems: "start",
};

const forEachFieldStyle = {
  color: "#5B5B5B",
  borderColor: "#5B5B5B",
  paddingBottom: ".3rem",
  minWidth: "320px",
  marginTop: "10px",
};

const TabNewComplaint: FC = () => {
  const [chipList, setChipList] = useState(chipsInitialState);
  const [selectedChip, setSelectedChip] = useState("");

  const handleSelectChip = (chipName: string): void => {
    setSelectedChip(chipName);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "start",
        marginTop: "30px",
        width: "100%",
        maxWidth: "500px",
        flexWrap: "no-wrap",
        gap: "30px",
        alignItems: "start",
        marginBottom: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#343333",
            fontSize: "1.3rem",
          }}
        >
          Qual o título da sua postagem?
        </Typography>
        <Input
          placeholder="Responda brevemente o motivo da denúncia"
          sx={forEachFieldStyle}
        />
      </Box>

      <Typography
        sx={{
          color: "#343333",
          fontSize: "1.3rem",
        }}
      >
        Selecione um tipo de denúncia
      </Typography>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          gap: "10px",
          p: 0.5,
          m: 0,
          boxShadow: "none",
        }}
        component="ul"
      >
        {chipList.map((chipItem) => (
          <Chip
            color={chipItem === selectedChip ? "primary" : "default"}
            label={chipItem}
            onClick={() => handleSelectChip(chipItem)}
          />
        ))}
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#343333",
            fontSize: "1.3rem",
            alignSelf: "start",
          }}
        >
          Descreva detalhadamente o que ocorreu
        </Typography>
        <ReactQuill theme="snow" />
      </Box>

      <Box sx={boxPerFieldStyle}>
        <Typography
          sx={{
            color: "#343333",
            fontSize: "1.3rem",
            alignSelf: "start",
          }}
        >
          Quem você está denunciando?
        </Typography>
        <Input
          placeholder="Responda com o nome do infrator"
          sx={forEachFieldStyle}
        />
      </Box>

      <LoadingButton
        color="error"
        loadingPosition="start"
        variant="contained"
        startIcon={<ErrorOutlineIcon />}
        sx={{
          padding: ".8rem 1.2rem",
          borderRadius: "50px",
        }}
      >
        Denunciar
      </LoadingButton>
    </Box>
  );
};

export default TabNewComplaint;
