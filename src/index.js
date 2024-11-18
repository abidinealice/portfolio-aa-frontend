import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./styles/style.css";
import theme from "./styles/theme";
import { LanguageContextProvider } from "./utils/Context/languageContext";
import "./i18next";
import Main from "./pages/Main";
import Error from "./pages/Error"
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import Header from "./components/Header";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="*" element={<Error />}/>
          </Routes> 
          <Footer/>
        </Router>
        
      </LanguageContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
