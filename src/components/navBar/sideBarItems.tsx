import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Groups3Icon from '@mui/icons-material/Groups3';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import {Link} from "react-router-dom";
export const sideBarItems = (
    <React.Fragment>
        <Link to="/home" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
        </Link>
        <Link to="/aboutme" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="About Me" />
            </ListItemButton>
        </Link>
        <Link to="/resume" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <ArticleIcon style={{ fontSize: '2rem' }}/>
                </ListItemIcon>
                <ListItemText primary="Resume" />
            </ListItemButton>
        </Link>
        <Link to="/portfolio" className="link-no-style">
            <ListItemButton>
                <ListItemIcon>
                    <SignalCellularAltIcon style={{ fontSize: '2rem' }} />
                </ListItemIcon>
                <ListItemText primary="Porfolio" />
            </ListItemButton>
        </Link>
        {/*<Link to="/contact" className="link-no-style">*/}
        {/*    <ListItemButton>*/}
        {/*        <ListItemIcon>*/}
        {/*            <Groups3Icon style={{ fontSize: '2rem' }}/>*/}
        {/*        </ListItemIcon>*/}
        {/*        <ListItemText primary="Contact" />*/}
        {/*    </ListItemButton>*/}
        {/*</Link>*/}
    </React.Fragment>
);