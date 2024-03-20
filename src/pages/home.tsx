import React from "react";
import {Main, NavBar} from "../components/navBar/navBar";
import {Box, Container, Toolbar} from "@mui/material";
export default function Home() {

    return (
        <Main open={true}>
            <Box sx={{ display: 'flex' }}>
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
                        Home
                    </Container>
                </Box>
            </Box>
        </Main>
    )
}