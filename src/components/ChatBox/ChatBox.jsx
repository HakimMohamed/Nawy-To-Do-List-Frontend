import { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const SubmitInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setIsFocused(true);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10%",
        left: "55%",
        transform: "translateX(-50%)",
        width: "70%",
        height: "45px",
        maxWidth: "1000px",
        backgroundColor: "white",
        borderRadius: "50px",
        boxShadow: 4,
        p: 1,
        display: "flex",
        alignItems: "center",
        opacity: isFocused || inputValue ? 1 : 0.5,
        transition: "opacity 0.3s ease",
        "&:hover": {
          opacity: 1,
        },
      }}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => {
        if (inputValue.trim() === "") {
          setIsFocused(false);
        }
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        autoComplete="off"
        placeholder="Add Task"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        InputProps={{
          sx: {
            paddingLeft: 2,
            paddingRight: 8,
            fontWeight: "bold",
            fontSize: "1.125rem",
            border: "none",
            outline: "none",
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          right: 7,
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: "black",
          color: "white",
          overflow: "hidden",
          boxShadow: 3,
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "black",
            transform: "scale(1.1)",
          },
        }}
      >
        <ArrowUpward
          sx={{
            position: "relative",
            zIndex: 10,
            width: "20px",
            height: "20px",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default SubmitInput;
