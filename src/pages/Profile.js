import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser, selectUserConnected } from "../redux/slice/UserConnected";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";
import PlanelUser from "../components/profile/PlanelUser";

const Profile = () => {
  const user = useSelector(selectUserConnected);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && !user) {
      dispatch(profileUser(token));
    }
  }, [dispatch, token, user]);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#F5F5F5",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily:
                "Helvetica Now Text Medium, Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#000000",
              lineHeight: "32px",
              textTransform: "none",
              letterSpacing: "normal",
              mt: 2,
              mb: 2,
            }}
          >
          </Typography>
        </Box>
        <PlanelUser user={user} />
      </Box>
    </>
  );
};

export default Profile;
