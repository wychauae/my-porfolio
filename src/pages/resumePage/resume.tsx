import React from "react";
import {Main, NavBar} from "../../components/navBar/navBar";
import {Box, Container, Theme, Toolbar, Typography} from "@mui/material";
import Background from "../../components/background";
import { makeStyles } from "@material-ui/core/styles";
import {Timeline} from "@mui/lab";
import {TimelineItemBuild} from "./timelineItem";

const useStyles = makeStyles((theme: Theme) => ({
    workExperienceTimeline: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        backgroundColor: "#233",
        flex: '1 1 auto',
        overflow: 'auto',
        padding: '1rem',
        '@media (max-width: 600px)': {
            top: "90%",
        },
    },
    bigTitle: {
        position: 'absolute',
        top: '10%',
        left: '2%',
        right: "0%",
        color: 'white',
        opacity: 0.2,
        zIndex: 0,
    },
}));

export default function Resume() {

    const classes = useStyles();

    return(
        <Main open={false}>
            <Box component="main"
                 sx={{
                     flexGrow: 1,
                     overflow: 'auto',
                     display: 'flex',
                     height: "100%",
                     width: "100%",
                     backgroundColor: "#233",
                     backgroundSize: 'cover',
                 }}>
                <NavBar/>
                <Container className={classes.workExperienceTimeline}>
                    <Timeline position="alternate" sx={{overflow:"auto"}}>
                        <TimelineItemBuild
                            time="2022.12 -2023.02"
                            jobTitle="Software Developer"
                            companyName="Gremod Co."
                            location="Hong Kong"
                            accomplishments={[
                                "Implemented responsive web pages using React.js and TypeScript.",
                                "Responsible for the implementation of authentication and authorization for the website using JWT and browser’s local storage.",
                                "Utilized Socket.IO to develop functionality similar to Kahoot!",
                            ]}
                        />
                        <TimelineItemBuild
                            time="2023.06-2023.09"
                            jobTitle="Programmer Trainee"
                            companyName="Smart Business Consultancy Limited"
                            location="Hong Kong"
                            accomplishments={[
                                "Developed warehouse notifications function by using SMTP and IMAP",
                                "Integrated Google Calendar with the existing scheduling function, enabling automatic synchronization of events added, updated, deleted in the system to the user's Google Calendar.",
                                "Assist data migration using Knex.js.",
                            ]}
                        />
                        <TimelineItemBuild
                            time="2023.06-now"
                            jobTitle="Final Year Project"
                            companyName="HKUST"
                            location="Hong Kong"
                            accomplishments={[
                                "Implement UI/UX by using Flutter and apply BLOC for state management.",
                                "Using Redis server to handle the cache and race condition.",
                            ]}
                        />
                    </Timeline>
                </Container>
                <Typography className={classes.bigTitle} style={{ fontSize: 'calc(1rem + 5vw)' }}>
                    RESUME
                </Typography>
                <Background opacity={0.1} />
            </Box>
        </Main>
    )
}