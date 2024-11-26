import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

//CONTAINER

export const ProjectContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundColor: Colors.mainBG,
  position: "relative",
}));
