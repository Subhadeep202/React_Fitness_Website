import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ffb703">
      <Stack gap="20px" alignItems="center" px="20px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="220px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by <span aria-label="img">👩‍💻</span>{" "}
          <a
            href="skuniquephysique@gmail.com"
            target="_blank"
            rel="SK"
            style={{ color: "#fefae0" }}
          >
            {" "}
            SK Fitness Club
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
