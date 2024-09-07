import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpDialog = ({
  open,
  onClose,
  email,
  password,
  name,
  onOpenRegister,
}) => {
  const [otp, setOtp] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}api/user/complete-register`,
        {
          email,
          otp,
          name,
          password,
        }
      );

      if (response.data.success) {
        await localStorage.setItem("token", response.data.data);
        onClose();
        navigate("/tasks");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      if (error.response.status === 403) {
        setError("Wrong Otp.");
      } else if (error.response.status === 400) {
        onOpenRegister();
      } else {
        setError("An error occurred during OTP verification.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "90%", sm: "400px" },
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: 2, sm: 3 },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enter OTP
          </Typography>

          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <OTP
            separator={<span>-</span>}
            value={otp}
            onChange={setOtp}
            length={4}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleVerifyOtp}
            fullWidth
            disabled={loading || otp.length !== 4}
            sx={{ mt: 2 }}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// OTP Component
function OTP({ separator, length, value, onChange }) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case "Delete":
      case "Backspace":
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (
        inputRefs.current[indexToEnter].value &&
        indexToEnter < currentIndex
      ) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split("");
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join("");
    });
    if (currentValue !== "") {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (
          inputRefs.current[indexToEnter].value &&
          indexToEnter < currentIndex
        ) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <TextField
            inputRef={(ele) => {
              inputRefs.current[index] = ele;
            }}
            variant="outlined"
            inputProps={{
              "aria-label": `Digit ${index + 1} of OTP`,
              style: { textAlign: "center" },
            }}
            value={value[index] ?? ""}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onChange={(event) => handleChange(event, index)}
            onClick={(event) => handleClick(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            sx={{ width: 40 }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

export default OtpDialog;
