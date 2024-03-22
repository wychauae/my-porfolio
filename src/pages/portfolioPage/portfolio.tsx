import React, {useEffect, useRef} from "react";
import {Box, Typography} from "@mui/material";
import {Main, NavBar} from "../../components/navBar/navBar";
import Background from "../../components/background";
import rocketImg from "../../assets/Images/taking-off-rocket-drawing-transparenth.png";
import {makeStyles} from "@mui/styles";
import { motion } from "framer-motion";
import {Projects} from "./projects";
import ProjectCard from "./projectCard";

const useStyles = makeStyles((theme) => ({
    rocketFly: {
        position: 'absolute',
        bottom: '5%',
        right: '2%',
        backgroundColor: 'transparent',
        display: 'block',
        zIndex: 1,
    },
    main: {
        position: 'fixed',
        top: '12rem',
        left: `calc(10rem + 15vw)`,
        height: '40vh',
        display: 'flex',
        color: 'white',
    },
    bigTitle: {
        position: 'fixed',
        top: '8%',
        left: '2%',
        right: "0%",
        color: 'white',
        opacity: 0.5,
        zIndex: 0,
    },
}));

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

export default function Portfolio() {

    const classes = useStyles();

    const ref = useRef(null);
    const rocket = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const fly = () => {
            // @ts-ignore
            element.style.transform = `translateX(${-window.pageYOffset}px)`;

            // @ts-ignore
            return (rocket.current.style.transform =
                "translateY(" + -window.pageYOffset*0.1 + "px)");
        };

        window.addEventListener("scroll", fly);
        return () => {
            window.removeEventListener("scroll", fly);
        };
    }, []);

    return(
        <Main open={false}>
            <Box component="main"
                 sx={{
                     flexGrow: 1,
                     overflow: 'auto',
                     display: 'flex',
                     height: "200vh",
                     width: "100%",
                     backgroundColor: "black",
                     backgroundSize: 'cover',
                 }}>
                <NavBar/>
                <motion.ul
                    ref={ref}
                    className={classes.main}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {Projects.map((d) => (
                        <ProjectCard  key={d.id} data={d} />
                    ))}
                </motion.ul>
                <Box component="div" className={classes.rocketFly}>
                    <img src={rocketImg} alt="geer" width={200} height={200} ref={rocket}/>
                </Box>
                <Typography className={classes.bigTitle} style={{ fontSize: 'calc(1rem + 5vw)' }}>
                    MY PROJECTS
                </Typography>
                <Background opacity={0.1} />
            </Box>
        </Main>
    )
}

