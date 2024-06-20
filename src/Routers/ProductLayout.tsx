import React from "react";
import { Route, Routes } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div>
      <Routes>
        <Route element={<ProductLayout />}>
          <Route element path="one" />
          <Route element path="two" />
          <Route element path="three" />
        </Route>
      </Routes>
    </div>
  );
};

export default ProductLayout;
