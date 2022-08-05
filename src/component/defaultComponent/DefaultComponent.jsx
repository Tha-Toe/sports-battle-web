import React from "react";
import { Button, Input, Box } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import "./defaultComponent.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export function ButtonComponent({ name, disabled, handleContinue }) {
  const theme = createTheme({
    palette: {
      action: {
        disabled: "rgba(255,255,255, 0.4)",
      },
    },
    breakpoints: {
      values: {
        xxxs: 0,
        xxs: 350,
        xs: 500,
        sm: 700,
        md: 900,
        lg: 1100,
        xl: 1550,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        disabled={disabled}
        onClick={handleContinue}
        className="disableButton"
        sx={{
          width: {
            md: "408px",
            sm: "390px",
            xs: "408px",
            xxs: "300px",
            xxxs: "250px",
          },
          height: { xs: "64px", xxxs: "50px" },
          background: "#4831D4",
          color: "white",
          fontSize: { xs: "16px", xxs: "14px" },
          fontWeight: "600",
          mb: 3,
          "&.MuiButtonBase-root:hover": {
            background: "#4831D4",
          },
          textTransform: "none",
        }}
      >
        {name}
      </Button>
    </ThemeProvider>
  );
}

export function ContinueButtonComponent({
  text,
  handleContinue,
  disabled,
  rightArrow,
  checkIcon,
}) {
  const theme = createTheme({
    palette: {
      action: {
        disabled: "rgba(255,255,255, 0.4)",
      },
    },
    breakpoints: {
      values: {
        xxxs: 0,
        xxs: 380,
        xs: 500,
        sm: 700,
        md: 900,
        lg: 1100,
        xl: 1550,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        endIcon={rightArrow ? <ArrowForwardIcon /> : checkIcon && <CheckIcon />}
        className="disableButton"
        sx={{
          width: {
            md: "240px",
            sm: "231px",
            xs: "240px",
            xxs: "186px",
            xxxs: "161px",
          },
          height: { xs: "64px", xxxs: "50px" },
          background: "#4831D4",
          color: "white",
          fontSize: { xs: "16px", xxxs: "12px" },
          fontWeight: "700",
          mb: 3,
          "&.MuiButtonBase-root:hover": {
            background: "#4831D4",
          },
          textTransform: "none",
          borderRadius: "8px",
          fontFamily: "Poppins",
        }}
        onClick={handleContinue}
        disabled={disabled}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

export function BackButtonComponent({ text, handleBack }) {
  return (
    <Button
      startIcon={<ArrowBackIcon />}
      sx={{
        width: {
          md: "160px",
          sm: "151px",
          xs: "160px",
          xxs: "106px",
          xxxs: "81px",
        },
        height: { xs: "64px", xxxs: "50px" },
        background: "#525252",
        color: "white",
        fontSize: { xs: "16px", xxxs: "12px" },
        fontWeight: "700",
        mb: 3,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "#525252",
        },
        textTransform: "none",
        borderRadius: "8px",
        fontFamily: "Poppins",
      }}
      onClick={handleBack}
    >
      {text}
    </Button>
  );
}

export function InputComponent({
  placeholder,
  setName,
  setEmail,
  setFirstName,
  setSecondName,
  setVerifyCode,
}) {
  return (
    <Input
      placeholder={placeholder}
      type="text"
      variant="outlined"
      disableUnderline
      sx={{
        width: {
          md: "408px",
          sm: "390px",
          xs: "408px",
          xxs: "300px",
          xxxs: "250px",
        },
        height: { xs: "64px", xxxs: "50px" },
        border: 0,
        borderColor: "#525252",
        background: "#272727",
        borderRadius: "5px",
        color: "white",
        boxShadow: 3,
        pl: 2,
        fontSize: { xs: "16px", xxxs: "14px" },
        mb: "16px",
        "&.MuiButtonBase-root:focus": {
          bgcolor: "black",
          borderColor: "white",
          border: 2,
          outline: 1,
        },
        fontFamily: "Poppins",
      }}
      onChange={(e) => {
        setName && setName(e.target.value);
        setEmail && setEmail(e.target.value);
        setFirstName && setFirstName(e.target.value);
        setSecondName && setSecondName(e.target.value);
        setVerifyCode && setVerifyCode(e.target.value);
      }}
    />
  );
}

export function PasswordInputComponent({
  placeholder,
  setShowPass,
  showPass,
  setPassword,
  setEnterPassword,
  setReEnterPassword,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: {
          md: "408px",
          sm: "390px",
          xs: "408px",
          xxs: "300px",
          xxxs: "250px",
        },
        height: { xs: "64px", xxxs: "50px" },
        mb: 2,
      }}
      component="div"
    >
      <Input
        placeholder={placeholder}
        type={showPass ? "text" : "password"}
        variant="outlined"
        disableUnderline
        sx={{
          width: 1,
          height: 1,
          border: 0,
          outline: 0,
          borderColor: "#525252",
          background: "#272727",
          borderRadius: "5px",
          color: "white",
          boxShadow: 3,
          pl: 2,
          fontSize: { xs: "16px", xxxs: "14px" },
          focused: "none",
          fontFamily: "Poppins",
        }}
        onChange={(e) => {
          setPassword && setPassword(e.target.value);
          setReEnterPassword && setReEnterPassword(e.target.value);
          setEnterPassword && setEnterPassword(e.target.value);
        }}
      />
      {showPass ? (
        <VisibilityOutlinedIcon
          sx={{
            color: "white",
            position: "absolute",
            top: { sm: "25px", xs: "18px", xxxs: "14px" },
            right: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowPass(false);
          }}
        />
      ) : (
        <VisibilityOffOutlinedIcon
          sx={{
            color: "white",
            position: "absolute",
            top: { sm: "25px", xs: "20px", xxxs: "16px" },
            right: "10px",
            cursor: "pointer",
            fontSize: { xs: "23px", xxxs: "18px" },
          }}
          onClick={() => {
            setShowPass(true);
          }}
        />
      )}
    </Box>
  );
}