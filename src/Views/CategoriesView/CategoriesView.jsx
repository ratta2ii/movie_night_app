import React from "react";
import { Box } from "@material-ui/core";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";

function CategoriesView(props) {
  return (
    <Box>
      <Header />
      <Categories />
      <Footer />
    </Box>
  );
}

export default CategoriesView;
