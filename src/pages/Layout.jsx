import React, { useState } from "react";
import { NavigationList, NavigationListItem } from "@kiwicom/orbit-components/";
import styled from "styled-components";
import PropTypes from "prop-types";
import Split from "react-split";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import _ from "lodash";
import AppFileReader from "../components/FileReaderComponent";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import AppBar from "./AppBar";
import AppContent from "./AppContent";
import AppStatus from "./AppStatus";

const Layout = props => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <AppBar />
        <AppContent />
        <AppStatus />
      </div>
    </BrowserRouter>
  );
};

/* Layout.propTypes = {
  Brand: PropTypes.object,
  Nav: PropTypes.object,
  Actions: PropTypes.object,
  LeftBar: PropTypes.object,
  Main: PropTypes.object,
  RightBar: PropTypes.object,
  Status: PropTypes.object,
  Info: PropTypes.object,
  Extra: PropTypes.object,
} */

export default Layout;
