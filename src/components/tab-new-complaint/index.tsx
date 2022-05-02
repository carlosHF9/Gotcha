import { FC, useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";

const TabNewComplaint: FC = () => {
  return (
    <Box
      component="form"
      sx={{
        alignSelf: "start",
        marginTop: "30px",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        id="filled-basic"
        label="Título da postagem"
        variant="filled"
        fullWidth
      />
      <TextField
        id="filled-basic"
        label="Nome do trapaceiro"
        variant="filled"
      />
    </Box>
  );
};

const initialValue: any = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable plain text, just like a <textarea>!" },
    ],
  },
];

export default TabNewComplaint;
