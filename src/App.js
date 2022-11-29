import React, { memo } from "react";
import ProtectedRoutes from "./components/router/ProtectedRoutes";
import NavigationBar from "./components/core/NavigationBar";
import routes from "./routes";

import "./App.scss";

const App = () => {
  return (
    <>
      <NavigationBar />
      <ProtectedRoutes routes={routes} />
    </>
  );
};

export default memo(App);
