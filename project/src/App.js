import React, { useEffect } from "react";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { firestore } from "./firebase";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  useEffect(() => {
    // console.log(firestore);
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/SignUp/" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
