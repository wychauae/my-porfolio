import React from "react";
import {Main, NavBar} from "../components/navBar/navBar";
import {Box, Container, Toolbar} from "@mui/material";
import Background from "./background";
import Introduction from "./introducion";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
    },
}));

export default function Home() {

    const classes = useStyles();

    return (
        //TODO:lift up the state/apply redux to the NavBar
        <Main open={false}>
            <Box className={classes.root} sx={{ display: 'flex' }}>
                <NavBar/>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ m: 1, p: 1}}>
                        <Introduction/>
                        <Background/>
                    </Container>
                </Box>
            </Box>
        </Main>
    )
}