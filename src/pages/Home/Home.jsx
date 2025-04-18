/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { HomeBanner } from "./HomeBanner/HomeBanner";
import { HomeCards } from "./HomeCards/HomeCards";
import { Ads } from "@components/Ads/Ads";
import { MoreBtn } from "@components/MoreBtn/MoreBtn";
import { Social } from "@components/Social/Social";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/redux/page/pageAction.js";
import { CardList } from "@components/CardList/CardList";

export const Home = () => {
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(3));
  }, []);
//51b9fddd-96c9-41c8-97eb-c372b153569c
  return (
    <>
      <HomeBanner />
      <HomeCards />
      <Ads />
      <div className="container">
        <CardList page={2} count={12} end={false} />
      </div>
      <Social />
      <div className="container">
        {" "}
        <CardList page={3} count={12} end={false} />
      </div>{" "}
      <MoreBtn />
    </>
  );
};
