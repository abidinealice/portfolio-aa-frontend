import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Colors } from "../theme";

//CONTAINER

export const AboutContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundColor: Colors.mainBG,
  position: "relative",
}));

export const AboutGrid = styled(Grid2)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  marginTop: "70px",
  padding:"0 10px 30px 10px",
  alignItems: "center",
}));

export const AboutBubbleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "solid 1px #E8B7AB",
  borderRadius: "0 35px 35px 35px",
  backgroundColor: Colors.bubbleTextBG,
  boxShadow: "5px 5px 3px #6f44493d",
  height: "150px",
  [theme.breakpoints.down("md")]: {
  },
}));

//TEXT

export const AboutText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  zIndex: "3",

  [theme.breakpoints.down("md")]: {
    fontSize: " 18px",
  },
}));
