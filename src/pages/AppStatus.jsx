import React,{useState} from "react";
import { NavigationList, NavigationListItem } from "@kiwicom/orbit-components/";
import styled from 'styled-components'
import PropTypes from 'prop-types'

import './AppStatus.css'

const AppStatus = () => {
    return (
      <div className="AppFooter">
        <div className="AppStatus" />
        <div className="AppInfo" />
        <div className="AppExtra" />
      </div>
    );
  };

export default AppStatus;