import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import _ from 'lodash'
import AppFileReader from '../components/FileReaderComponent'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import React,{useState} from "react";
import { NavigationList, NavigationListItem } from "@kiwicom/orbit-components/";
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './AppBar.css'
import FileReaderAction from "../components/FileReaderComponent";
const AppBar = (props) => {
  const [navs, setNavs] = useState(
    [ <ButtonLink type="secondary" transparent>English</ButtonLink>,
    <ButtonLink type="secondary" transparent>EUR - €</ButtonLink>
  ])

  const onAddNav = evt => {
    const NewBtn = <ButtonLink type="secondary" transparent>{_.uniqueId()}</ButtonLink>
    setNavs([...navs, NewBtn])
  }

  const onFileLoad = data => {
      console.log(data)
  }

  return (
    <div className="AppBar">
      <div className="AppBrand">
        {typeof(props.Brand) === 'object' ? <props.Brand/> : props.Brand}
      </div>
      <div className="AppNav">
        <NavigationList type="inline" className="AppNavList">
          <ButtonLink type="secondary"  onClick={onAddNav} transparent>
            Add + &rarr;
          </ButtonLink>
          {navs.map(navEm => navEm)}
        </NavigationList>
      </div>
      <div className="AppActions" >
          <FileReaderAction FileDidLoad={onFileLoad}/>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  Brand:PropTypes.oneOf([PropTypes.element, PropTypes.string, PropTypes.func]),
  Action: PropTypes.shape({
    Component: PropTypes.element,
    Props: PropTypes.any
  })
}
AppBar.defaultProps = {
    Brand: "App",
    Action: <p/>
  }
export default AppBar;