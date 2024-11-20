import { Button, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";

//CONTAINER

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
  backgroundColor: Colors.mainBG,
}));

export const AppbarMContainer = styled(Box)(() => ({
  backgroundColor:Colors.mainBG
}));

export const AppBarMOpen = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  alignItems: "start",
  gap: "30px",
  width: "100%",
  height:"100vh",
  paddingBottom: "35px",
  backgroundColor: Colors.mainBG,
  zIndex: "100",  
}))

export const AppBarHambuger = styled(Box)(() => ({
  position:"relative",
  display: "flex",
  justifyContent: "flex-end",
  height:"60px",
  right:"14px",
  alignItems:"center",
}))

export const AppBarLinks = styled(Box)(({theme}) => ({
  [theme.breakpoints.down("md")]: {
    display:"flex",
    color: Colors.mainMenuText,
    cursor: "pointer",
    marginLeft:"20px",
    gap:"20px",
  }
}))

//IMAGE

export const AppbarImg = styled("img")(() => ({
  width: "50px",
}));

//LIST

export const AppbarList = styled(List)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
}));

export const AppbarListItem = styled(ListItem)(() => ({
  padding: "0 20px",
  width: "auto",
  color: Colors.primary,
  cursor: "pointer",
}));

//BUTTON

export const AppbarBtn = styled(Button)(() => ({
  variants: "contained",
}));

//TEXT

export const AppbarTypography = styled(Typography)(() => ({
}));

export const AppBarMLink = styled(Typography)(({ theme }) => ({
  color: Colors.mainMenuText,
  cursor: "pointer",
  marginLeft:"20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const AppBarMSeparator = styled("span")(({theme}) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
    width: "70%",
    marginLeft: "20px",
    marginTop:"25%",
    borderBottom: "2px solid white",
  },
  
}))

//ICONS

export const AppBarMIcon = styled("a")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
      textDecoration:"none",
      color:"#FFF"
  },
}));
 