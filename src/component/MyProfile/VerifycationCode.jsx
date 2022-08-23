import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./profile.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Input } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Success from "./Success";
import Wrong from "./Wrong";
import CheckIcon from "@mui/icons-material/Check";
export default function VerifycationCode({
  setOpenTag,
  phoneNumber,
  setPhoneNumber,
  setVerify,
}) {
  const goToVerifyCodePage = () => {
    if (verifyCode) {
      setVerify(true);
      setOpenTag("profile");
    }
  };
  const [verifyCode, setVerifyCode] = useState(null);

  return (
    <Box
      sx={{
        width: {
          lg: "836px",
          md: "700px",
          sm: "560px",
          xs: "90%",
          xxxs: "90%",
        },
        minHeight: "100vh",
        margin: "auto",
        mt: "10px",
        mb: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      component="div"
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "15px",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: "15px",
            cursor: "pointer",
          }}
          onClick={() => setOpenTag("add-phone-number")}
        >
          <ArrowBackIosNewIcon />
          <Typography
            sx={{
              fontSize: { sm: "16px", xxs: "14px", xxxs: "12px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "secondary.main",
              ml: "15px",
            }}
          >
            Back to Phone number{" "}
          </Typography>
        </Box>
        <ClearIcon
          sx={{ color: "secondary.main", cursor: "pointer" }}
          onClick={() => setOpenTag("profile")}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { sm: "16px", xxs: "14px", xxxs: "12px" },
          fontFamily: "poppins",
          fontWeight: 600,
          color: "secondary.main",
          mt: "31px",
          width: "100%",
        }}
      >
        Verification Code{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
          fontFamily: "poppins",
          fontWeight: 400,
          color: "secondary.main",
          mt: "13px",
          width: "100%",
        }}
      >
        Please enter verification code sent to your phone number -
        <span style={{ fontWeight: 700, marginLeft: "5px" }}>
          {phoneNumber}
        </span>
      </Typography>
      <Input
        sx={{
          width: "100%",
          borderBottom: "1px solid #494949",
          color: "secondary.main",
          fontSize: { sm: "16px", xxs: "14px", xxxs: "12px" },
          fontWeight: 500,
          mt: "24px",
          pb: "16px",
        }}
        placeholder="Enter Verifycation Code"
        type="number"
        onChange={(e) => setVerifyCode(e.target.value)}
      />
      <Box
        sx={{
          width: "100%",
          mt: "24px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            py: "14px",
            background: "transparent",
            color: "white",
            textTransform: "none",
            borderRadius: "8px",
            "&.MuiButtonBase-root:hover": {
              background: "transparent",
            },
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 600,
            fontFamily: "poppins",
            border: "1px solid #fafafa",
            width: "45%",
          }}
        >
          Resend Code (30s){" "}
        </Button>
        <Button
          sx={{
            py: "14px",
            background: "#4831D4",
            color: "white",
            textTransform: "none",
            borderRadius: "8px",
            "&.MuiButtonBase-root:hover": {
              background: "#4831D4",
            },
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 600,
            fontFamily: "poppins",
            width: "45%",
          }}
          onClick={goToVerifyCodePage}
        >
          Submit Code{" "}
        </Button>
      </Box>
      {verifyCode && (
        <Box
          sx={{
            width: "100%",
            mt: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ color: "#52C03C" }} />
          <Typography
            sx={{
              color: "#52C03C",
              fontSize: { sm: "16px", xxs: "14px", xxxs: "12px" },
              ml: { xs: "21px", xxxs: "10px" },
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            Your mobile number has been verified successfully
          </Typography>
        </Box>
      )}
      {!verifyCode && (
        <Box
          sx={{
            width: "100%",
            mt: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ClearIcon sx={{ color: "#E4313C" }} />
          <Typography
            sx={{
              color: "#E4313C",
              fontSize: { sm: "16px", xxs: "14px", xxxs: "12px" },
              ml: { xs: "21px", xxxs: "10px" },
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            Verification code incorrect{" "}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
