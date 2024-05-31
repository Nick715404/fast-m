import { HomePageData } from "@/constants/data";
import { InfoBlockItem } from "./InfoBlockItem";
import { Fragment } from "react";

export function InfoBlocksList() {
  const { tabs } = HomePageData;

  return (
    <div className="flex items-center justify-between">
      {
        tabs.map((tab, index) => (
          <Fragment key={index}>
            <InfoBlockItem data={tab} />
          </Fragment>
        ))
      }
    </div>
  );
};