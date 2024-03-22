import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {
    Avatar,
    Box,
    CssBaseline,
    Divider,
    IconButton,
    List,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Drawer from '@mui/material/Drawer';
import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import myIcon from "../../assets/Images/myIcon.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {sideBarItems} from "./sideBarItems";
import './navBar.css';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    //TODO remember to change to 3
    // padding: theme.spacing(3),
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{
            display: 'flex',
            //TODO overflow issue
            // height: '100vh',
        }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx ={{background: "#202020", opacity:1}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <Avatar src={myIcon} sx={{ width: 55, height: 55 }} />
                        <Typography variant="h6">My Portfolio</Typography>
                    </Box>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {sideBarItems}
                </List>
            </Drawer>
        </Box>
    );
}