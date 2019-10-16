import React from "react";
import {
  Card,
  ButtonLink,
  CountryFlag,
  NavigationList,
  NavigationListItem
} from "@kiwicom/orbit-components/";
import styled from "styled-components";

const CenteredNav = styled(NavigationList)`
  justify-content: center;
`;

const App = () => (
  <div className="grid-container">
    <div className="AppBar">
      <div className="AppBrand" />
      <div className="AppNav">
        <NavigationList type="inline" className="AppNavList">
          <NavigationListItem
            iconLeft={<CountryFlag />}
            type="secondary"
            transparent
          >
            English
          </NavigationListItem>
          <NavigationListItem type="secondary" transparent>
            EUR - €
          </NavigationListItem>
          <NavigationListItem type="secondary" transparent>
            Help
          </NavigationListItem>
          <NavigationListItem type="secondary" transparent>
            Starred
          </NavigationListItem>
          <NavigationListItem type="secondary" transparent>
            My Bookings
          </NavigationListItem>
        </NavigationList>
      </div>
      <div className="AppActins" />
    </div>
    <div className="AppStatus">
      <div className="AppStatus" />
      <div className="AppInfo" />
      <div className="AppExtra" />
    </div>
    <div className="AppContent">
      <div className="AppLeftContent" />
      <div className="AppCenterContent" />
      <div className="AppRightContent" />
    </div>
  </div>
);

export default App;
