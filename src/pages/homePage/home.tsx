import React from "react";
import {Main, NavBar} from "../../components/navBar/navBar";
import {Box, Container} from "@mui/material";
import Background from "../../components/background";
import Introduction from "./introducion";
import { makeStyles } from '@mui/styles';
import bgImg from "../../assets/Images/bgImg.jpg";


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
            <Box component="main"
                 className={classes.root}
                 sx={{
                     flexGrow: 1,
                     overflow: 'auto',
                     height: "100%",
                     width: "100%",
                     backgroundImage: `url(${bgImg})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: "center center",
                     display: 'flex'
            }}>
                <NavBar/>
                <Container maxWidth="lg" sx={{ m: 0, p: 0}}>
                    <Introduction/>
                    <Background opacity={0.6} />
                </Container>
            </Box>
        </Main>
    )
}