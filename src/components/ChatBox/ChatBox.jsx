import { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const SubmitInput = ({ addTask }) => {
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

  const handleSubmit = () => {
    addTask(inputValue);
    setInputValue("");
    setIsFocused(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "2%",
        left: "50%",
        transform: "translateX(-50%)",
        height: "45px",
        width: "30vw",
        maxWidth: "1200px",
        minWidth: "300px",
        backgroundColor: "black",
        borderRadius: "50px",
        boxShadow: 4,
        p: 1,
        display: "flex",
        alignItems: "center",
        opacity: isFocused || inputValue ? 0.8 : 0.3,
        transition: "opacity 0.3s ease",
        zIndex: 9999,
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
            color: "white",
            "& fieldset": {
              border: "none",
            },
            "& input": {
              color: "white",
            },
          },
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSubmit(); // Call handleSubmit when Enter key is pressed
          }
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          right: 10,
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: "white",
          color: "black",
          boxShadow: 3,
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.1)",
          },
        }}
        onClick={handleSubmit} // Call handleSubmit when the button is clicked
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
