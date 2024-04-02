import React from "react";
import Topbar from "../_components/Topbar";
import AllBanners from "../_components/Banner/AllBanners";

const BannersPage = () => {
  return (
    <>
      <Topbar title="Banners" />
      <AllBanners />
    </>
  );
};

export default BannersPage;
