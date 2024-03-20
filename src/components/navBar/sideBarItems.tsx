import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Groups3Icon from '@mui/icons-material/Groups3';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
export const sideBarItems = (
    <React.Fragment>
        <Link to="/home" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="HOME" />
            </ListItemButton>
        </Link>
        <Link to="/profile" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="RESUME" />
            </ListItemButton>
        </Link>
        <Link to="/game" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <SportsEsportsIcon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="PORTFOLIO" />
            </ListItemButton>
        </Link>
        <Link to="/" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <SignalCellularAltIcon style={{ fontSize: '2rem' }} />
                </ListItemIcon>
                <ListItemText primary="CONTACT" />
            </ListItemButton>
        </Link>
        <Link to="/" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <Groups3Icon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="SOCIAL" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);