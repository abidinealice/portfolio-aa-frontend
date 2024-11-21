import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

//CONTAINERS

export const HomeContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundColor: Colors.secondBG,
  position: "relative",
}));

export const HomeContentContainer = styled(Container)(() => ({
  position: "relative",
  padding:"40px 0 0 0",
}));

export const HomeGrid = styled(Grid2)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "40px",
    marginTop: "15%",
  },
}));

export const HomeTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  border: "solid 1px #E8B7AB",
  borderRadius: "0 35px 35px 35px",
  backgroundColor: "#E8B7AB",
  boxShadow: "5px 5px 3px #6f44493d",
  height: "230px",
  width:"300px",
  [theme.breakpoints.down("md")]: {
    gap: "10px",
  },
}));

export const HomeLocationBox = styled(Box)(({theme}) =>({
  margin: "0 30px",
  display: "flex",
  alignItems: "center",
  gap: "7px"
}))

//TYPOGRAPHY

export const HomeTypographyTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: " 35px",
    margin:"0 30px",
  },
}));

export const HomeTypographySubtitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: " 25px",
  },
}));

//IMG

export const HomeImg = styled("img")(({ theme }) => ({
  position: "absolute",
  right: "12%",
  [theme.breakpoints.down("md")]: {
    position: "relative",
    right: "0",
  },
}));
