import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import bgHome from "../../images/bgAll.png";
import { Colors } from "../theme";

//CONTAINER

export const ProjectContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundColor:Colors.mainBG,
  position: "relative",
}));
