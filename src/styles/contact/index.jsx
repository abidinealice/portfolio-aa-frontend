import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

//CONTAINER

export const ContactContainer = styled(Box)(() => ({
  minHeight: `50svh`,
  backgroundColor: Colors.secondBG,
  position: "relative",
}));

export const ContactGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "200px",
  marginTop: "60px",
  paddingBottom: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "0",
    alignItems: "center",
  },
}));

export const ContactBubbleBox = styled(Box)(({ theme }) => ({
  border: "solid 1px #E8B7AB",
  borderRadius: "0 35px 35px 35px",
  backgroundColor: Colors.bubbleTextBG,
  boxShadow: "5px 5px 3px #6f44493d",
  width: "300px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
  },
}));

//TEXT

export const ContactTitle = styled(Typography)(({ theme }) => ({
  paddingTop: "12%",
  textAlign: "center",
  color: Colors.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  color: Colors.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const ContactTextField = styled(Typography)(() => ({}));

//BUTTON

export const ContactFormBtn = styled(Button)(({ theme }) => ({
  backgroundColor: Colors.primary,
  width: "50%",
  left: "50%",
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
}));

//FORM

export const ContactForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "300px",
  [theme.breakpoints.down("md")]: {
    width: "245px",
  },
}));

export const ContactFormText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const ContactFormField = styled(TextField)(() => ({
  backgroundColor: "#481010",
  borderRadius: "20px",
  "& .MuiFilledInput-root::before": {
    borderBottom: "none",
  },
  "& .MuiFilledInput-root::after": {
    borderBottom: "none",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "transparent",
    borderBottom: "none",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    borderBottom: "none",
  },
  "& .MuiFilledInput-input": {
    backgroundColor: "transparent",
    borderBottom: "none",
    borderRadius: "0",
  },
  "& .MuiFilledInput-input:hover": {
    backgroundColor: "transparent",
    borderBottom: "none",
    borderRadius: "0",
  },

  "& .MuiInputBase-input": {
    color: "#fff",
    backgroundColor: "transparent",
  },

  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
}));
