import { FC } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter: FC = () => {
  const element = useRoutes([
    {
      path: "/*",
      element: <ProtectedRoutes />,
    },
  ]);
  return element;
};

export default AppRouter;
