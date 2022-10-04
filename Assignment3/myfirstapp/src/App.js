import React from "react";
import classes from "./App.module.css";
import { useState } from "react";

import { Browse } from "./Browse.js";
import { Insert } from "./Insert.js";
import { Navigation } from "./Navigation.js";
import { Datasets } from "./Datasets.js";

function MyApp() {
  const [activePage, setActivePage] = useState("Browse");

  function activePageHandler(page) {
    setActivePage(page);
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Navigation
          activePage={activePage}
          activePageHandler={activePageHandler}
        />
      </div>
      <div className={classes.right}>
        {activePage === "Browse" && <Browse />}
        {activePage === "Insert" && <Insert />}
        {activePage === "Datasets" && <Datasets />}
      </div>
    </div>
  );
}

export default MyApp;
