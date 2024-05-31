import { HomePageData } from "@/constants/data"
import { CustomIframeItem } from "./CustomIframeItem";
import { Fragment } from "react";

export function CustomIframeList() {
  const { education } = HomePageData;

  return (
    <div className="flex justify-between gap-8">
      {
        education.map((item) => (
          <Fragment key={item.id}>
            <CustomIframeItem data={item} />
          </Fragment>
        ))
      }
    </div>
  )
}