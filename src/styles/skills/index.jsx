import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Colors } from "../theme";

//CONTAINER

export const SkillsContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundColor: Colors.secondBG,
  position: "relative",
}));

export const SkillsGrid = styled(Grid2)(({ theme }) => ({
  margin: "25px 0 0 0",
  padding:"0 10px 30px 10px",
  position: "relative",
  zIndex: "2",
  [theme.breakpoints.down("md")]: {},
}));

export const SkillGrid = styled(Grid2)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));

export const SkillsBubbleBox = styled(Grid2)(({ theme }) => ({
  border: "solid 1px #E8B7AB",
  borderRadius: "0 35px 35px 35px",
  backgroundColor: Colors.bubbleTextBG,
  boxShadow: "5px 5px 3px #6f44493d",
  [theme.breakpoints.down("md")]: {
  },
}));

export const SkillsBubbleTitleBox = styled(Grid2)(({ theme }) => ({
  height: "50px",
  margin: "45px 0",
  border: "solid 1px #E8B7AB",
  borderRadius: "35px 0px 35px 35px",
  backgroundColor: Colors.bubbleTitleBG,
  boxShadow: "5px 5px 3px #6f44493d",
  [theme.breakpoints.down("md")]: {
  },
}));


//TEXT

export const SkillsTypography = styled(Typography)(() => ({}));

export const SkillsTypographyTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingTop: "12%",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

export const SkillsTypographySubTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));
export const SkillsTypographyTxt = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));
