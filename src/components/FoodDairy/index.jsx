import React, { useRef } from "react";
import Footer from "../Home-Page/Footer/Footer";
import { AddFoodDairy } from "./AddFood";
import { TableDairy } from "./TableDairy";

export function FoodDairy() {
  let componentRef = useRef();

  return (
    <div>
      <AddFoodDairy componentRef={componentRef} />
      <Footer />
    </div>
  );
}
