import React, { memo, Suspense } from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";

import Loader from "../../layout/Loader";

const ProtectedRoutes = ({ routes }) => {
  return (
    <Suspense fallback={<Loader isLoading />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

ProtectedRoutes.propTypes = {
  routes: PropTypes.array,
};

ProtectedRoutes.defaultProps = {
  routes: [],
};

export default memo(ProtectedRoutes);
