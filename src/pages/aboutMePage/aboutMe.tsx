import React from "react";
import {Box, Typography} from "@mui/material";
import {Main, NavBar} from "../../components/navBar/navBar";
import {makeStyles} from "@mui/styles";
import spaceMan from "../../assets/Images/spaceman.png";
import Background from "../../components/background";
import bgImg from "../../assets/Images/aboutMeBG.jpg";


const useStyles = makeStyles((theme) => ({
    spaceman: {
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '20vw',
        animation: '$float 4s ease infinite',
        '& img': {
            width: '100%',
            height: 'auto',
        },
        backgroundColor:"transparent",
    },
    '@keyframes float': {
        '0%': {
            transform: 'translateY(-10px)',
        },
        '50%': {
            transform: 'translateY(15px) translateX(15px)',
        },
        '100%': {
            transform: 'translateY(-10px)',
        },
    },
    bigTitle: {
        position: 'fixed',
        top: '10%',
        left: '2%',
        right: "0%",
        color: 'white',
        opacity: 0.5,
        zIndex: 0,
    },
    content: {
        border: '2px solid white',
        color: 'white',
        padding: '2rem',
        width: '50vw',
        height: '60vh',
        zIndex: 3,
        lineHeight: 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(4px)',
        position: 'absolute',
        top: '11rem',
        fontStyle: 'italic',
    }
}));


export default function AboutMe() {

    const classes = useStyles();

    return(
        <Main open={false}>
            <Box component="main"
                 sx={{
                     height: "100vh",
                     flexGrow: 1,
                     overflow: 'auto',
                     display: 'flex',
                     backgroundColor: 'black',
                     backgroundImage: `url(${bgImg})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: "center center",
                 }}>
                <NavBar/>
                <Typography className={classes.content} style={{ fontSize: 'calc(0.6rem + 1vw)', left: 'calc(5rem + 5vw)',  fontFamily: 'Ubuntu Mono',}}>
                    I'm currently a Year 4 student at HKUST, studying CPEG. Graduation is just around the corner for me. I have a deep passion for programming and enjoy creating websites and apps.
                    <br /> <br/>
                    I'm interested in both the frontend and backend stacks, and I enjoy exploring new things and building great projects. I'm self-motivated and a fast learner.
                    <br /> <br/>
                    You can connect with me via email: wychauae@connect.ust.hk.
                </Typography>
                <Box component="div" className={classes.spaceman}>
                    <img src={spaceMan} alt="Spaceman"/>
                </Box>
                <Typography className={classes.bigTitle} style={{ fontSize: 'calc(1rem + 5vw)' }}>
                    ABOUT ME
                </Typography>
                <Background opacity={0.1} />
            </Box>
        </Main>
    )
}

