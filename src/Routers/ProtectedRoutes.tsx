import { FC } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const ProtectedRoutes: FC = () => {
  return (
    <Box>
      <Header />
      <Grid
        sx={{
          position: "absolute",
          top: { xs: "56px", md: "62px" },
          left: "0",
          width: "100%",
          height: "calc(100% - 102px)",
          padding: { xs: "15px 10px 0px", md: "15px" },
          overflowY: { sm: "scroll", md: "hidden" },
        }}
      >
        <Grid
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": { width: "7px", display: "none" },
            "&::-webkit-scrollbar-track": { display: "#e7ebf0" },
            "&::-webkit-scrollbar-thumb": {
              background: "primary.main",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": { display: "006ec9" },
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProtectedRoutes;
