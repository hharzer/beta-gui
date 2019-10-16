import React,{useState} from "react";
import Split from 'react-split'
import styled from 'styled-components'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import './AppContent.css'

const BackgDov = styled.div`
  background-color: lightgrey;
`

export const AppContent = () => {
  return (

    <Split sizes={[16,66,16]} className="AppContent">
      <BackgDov  />
      <BackgDov  />
      <BackgDov  />
    </Split>
  );
};

export default AppContent;