import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import bgHome from "../../images/bgAll.png";

//CONTAINER

export const ErrorContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundImage: `url(${bgHome})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "70px",
}));

//TEXT

export const ErrorText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  zIndex: "3",
  [theme.breakpoints.down("md")]: {
    fontSize: " 25px",
  },
}));

//IMG

export const ErrorImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
      width: " 350px",
  },
}));
