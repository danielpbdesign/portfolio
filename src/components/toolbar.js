import React from  'react';
import { Link } from 'gatsby'
import styled from "styled-components"

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import drawerToggleButton from './SideDrawer/DrawerToggleButton';
import {StyledLink, Nav} from './NavigationLinks';




const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Daniel Balloch</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <StyledLink id="StyledLink" to="/" ><Nav>Work</Nav></StyledLink>
                    <StyledLink to="/about/" ><Nav>About</Nav></StyledLink>
                    <StyledLink to="/services/"><Nav>Services</Nav></StyledLink>
                    <StyledLink to="/contact" ><Nav>Contact</Nav></StyledLink>
                </ul>
                
            </div>
        </nav>
    </header>
);

export default toolbar;