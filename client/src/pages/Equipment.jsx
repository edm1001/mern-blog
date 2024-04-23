import React from "react";
import Header from "../components/Header";

function Equipment() {
  return (
    <>
      <Header />
      <div className="text-center">
        <h1 className="text-2xl">Equipment</h1>
        <p className="mt-2">small paragraph about products we carry</p>
      </div>
      <div>
        {/* all equipments unless a category is clicked */}
        {/* cat. options = barbell, treadmill, yoga mats, books */}
      </div>
    </>
  );
}

export default Equipment;
