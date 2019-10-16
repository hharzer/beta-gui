import React from "react";
import {
  Card,
  ButtonLink,
  CountryFlag,
  NavigationList,
  NavigationListItem
} from "@kiwicom/orbit-components/";
import styled from "styled-components";

import Layout from './pages/Layout'

const CenteredNav = styled(NavigationList)`
  justify-content: center;
`;

const App = () => <Layout/>;

export default App;
