import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CachedIcon from "@mui/icons-material/Cached";

const PlanelForm = ({ email, goToFirstTab, goToSecondTab }) => {
  const [code, setCode] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState(null);
  const [acceptTermsOfUse, setAcceptTermsOfUse] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDateChange = (newValue) => {
    setDateOfBirth(newValue);
  };

  const handleCheckboxChange = (event) => {
    setAcceptTermsOfUse(event.target.checked);
  };

  const resendCode = () => {
    console.log("Resend verification code logic here");
  };
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Helvetica Now Text Medium, Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "26px",
          color: "#111111",
          lineHeight: "24px",
          textTransform: "none",
        }}
      >
        Ollosa
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Now Text Medium, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "28px",
          color: "#000000",
          lineHeight: "32px",
          textTransform: "none",
          letterSpacing: "normal",
          mt: 4,
        }}
      >
        Faisons de toi un membre Ollosa.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Helvetica Now Text Medium, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          color: "#111",
          lineHeight: "24px",
          textTransform: "none",
          letterSpacing: "normal",
          width: "340px",
          mt: 4,
        }}
      >
        Nous avons envoyé un code à <br />
        {email}{" "}
        <span
          onClick={goToFirstTab}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "#757575",
          }}
        >
          Modifier
        </span>
      </Typography>
      <TextField
        label="Code"
        variant="outlined"
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        fullWidth
        sx={{ mt: 4 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="resend code"
                onClick={resendCode}
                edge="end"
              >
                <CachedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 4,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Prénom"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          fullWidth
          sx={{ width: "46%" }}
        />
        <TextField
          label="Nom"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          fullWidth
          sx={{ width: "46%" }}
        />
      </Box>
      <TextField
        label="Mot de passe"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        sx={{ mt: 4 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ width: "100%", mt: 4 }}
      >
        <DatePicker
          sx={{ width: "100%", mt: 4 }}
          label="Date de naissance"
          value={dateOfBirth}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
          inputFormat="DD/MM/YYYY"
        />
      </LocalizationProvider>
      <FormControlLabel
        sx={{ width: "100%", mt: 4 }}
        control={
          <Checkbox
            checked={acceptTermsOfUse}
            onChange={handleCheckboxChange}
            style={{
              color: "#000",
            }}
          />
        }
        label="J'accepte les Conditions d'utilisation et je confirme avoir lu la Politique de confidentialité de Ollosa."
        required
      />
      <Button
        onClick={goToSecondTab}
        sx={{
          mt: 4,
          width: "150px",
          backgroundColor: "#000",
          color: "#FFF",
          borderRadius: "100px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#000",
            color: "#FFF",
          },
        }}
      >
        Créer un compte
      </Button>
    </>
  );
};

export default PlanelForm;
