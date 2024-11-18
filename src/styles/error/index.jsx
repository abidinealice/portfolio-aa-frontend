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
}));

//TEXT

export const ErrorText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  zIndex: "3",

  [theme.breakpoints.down("md")]: {
    fontSize: " 18px",
  },
}));
