import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
    h1: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    h2: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    h3: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    h4: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#D87D4A",
      light: "#fbaf85",
      dark: "#b35f2f",
    },
    gray: {
      main: "#F1F1F1",
      light: "#fafafa",
      dark: "#101010",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 5,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "0",
          fontWeight: 600,
          fontSize: "0.8125rem",
          padding: "0.75rem 2rem",
          letterSpacing: "1px",
          "&:hover": {
            backgroundColor: "#fbaf85",
          },
        },
        outlined: {
          border: "2px solid #101010",
          color: "#101010",
          "&:hover": {
            backgroundColor: "#101010",
            color: "#FFF",
            border: "2px solid #101010",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            borderRadius: 8,
            top: "-2rem",
            transform: "unset",
            fontWeight: 600,
            color: "#000",
            "&.Mui-focused": {
              color: "#000",
            },
          },
          "& legend": {
            display: "none",
          },
          "&  .MuiOutlinedInput-input::placeholder": {
            opacity: 1,
            visibility: "visible",
            display: "none",
            color: "red",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: "2px solid #CFCFCF",
          padding: "0.75rem 1rem",
          borderRadius: 7,
          transition: "all 0.2s",
          fontWeight: 600,
          "&:hover, &.Mui-focused": {
            borderColor: "#D87D4A",
          },
          "&.Mui-error": {
            borderColor: "#CD2C2C",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          border: "2px solid #CFCFCF",
          padding: "0.75rem 1rem",
          borderRadius: 7,
          transition: "all 0.2s",
          fontWeight: 600,
          "&:hover, &.Mui-focused": {
            borderColor: "#D87D4A",
          },
          "&.Mui-error": {
            borderColor: "#CD2C2C",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
