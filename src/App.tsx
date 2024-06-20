import { Box } from "@mui/material";
import ProtectedRoutes from "./Routers/ProtectedRoutes";
import AppRouter from "./Routers";

function App() {
  return (
    <Box>
      <AppRouter />
    </Box>
  );
}

export default App;
