import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    justifyContent="space-between"
    sx={{
      gap: { sm: "83px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "128px", height: "108px", margin: "0px 15px" }}
      />
    </Link>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#b2becd",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#b2becd" }}>
        Exercises
      </a>
      <a href="#contact" style={{ textDecoration: "none", color: "#b2becd" }}>
        Contact
      </a>
      <Link
        to="/BmiCalculator"
        style={{ textDecoration: "none", color: "#b2becd" }}
      >
        BMI Calculator
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
