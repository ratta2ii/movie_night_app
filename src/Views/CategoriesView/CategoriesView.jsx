import React from "react";
import { Box } from "@material-ui/core";
import Footer from "./../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";

function CategoriesView(props) {
  return (
    <Box>
      <Categories />
      <Footer />
    </Box>
  );
}

export default CategoriesView;
