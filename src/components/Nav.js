import React from 'react';
import { Link } from 'react-router-dom';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventIcon from '@material-ui/icons/Event';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import { IconButton } from '@material-ui/core';

export const Nav = () => (

    

    <nav className="nav">
        <Link to="/">
        <IconButton className="svg_icons"><HomeRoundedIcon style={{fill: "white"}} /></IconButton>
        </Link>
        <Link to="/add">
            <IconButton className="svg_icons"><EventIcon style={{fill: "white"}} /></IconButton>
        </Link>
        <Link to="/list">
        <IconButton className="svg_icons"><GridOnOutlinedIcon style={{fill: "white"}} /></IconButton>
        </Link>
    </nav>
)