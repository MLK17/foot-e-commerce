import React from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import PlanelEmail from "../components/login/PlanelEmail";
import PlanelForm from "../components/login/PlanelForm";
import PlanelPassword from "../components/login/PlanelPassword";
import PlanelUpdate from "../components/login/PlanelUpdate";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToFirstTab = () => {
    setValue(0);
  };
  const goToFormTab = () => {
    setValue(1);
  };
  const goToSecondTab = () => {
    setValue(2);
  };
  const goToThirdTab = () => {
    setValue(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${BASE_URL}/user`, {
        headers: {
          email: email,
        },
      });
      const message = response.data.message;

      if (
        message ===
        "Utilisateur introuvable. Code de verification envoyé par e-mail !"
      ) {
        goToFormTab();
      } else if (message === "Utilisateur existant. Connectez-vous !") {
        goToSecondTab();
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4rem",
        width: "100%",
        height: "100%",
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "440px",
          marginBottom: "4rem",
          height: "100%",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: "none" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Fourth" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PlanelEmail
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PlanelForm
            email={email}
            goToFirstTab={goToFirstTab}
            goToSecondTab={goToSecondTab}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PlanelPassword
            email={email}
            goToFirstTab={goToFirstTab}
            goToThirdTab={goToThirdTab}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <PlanelUpdate
            email={email}
            goToFirstTab={goToFirstTab}
            goToSecondTab={goToSecondTab}
          />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  email: PropTypes.string,
};

export default Login;
