import React from "react";
import { ReactTyped } from "react-typed";
import { makeStyles } from '@mui/styles';
import avatar from "../../assets/Images/myIcon.jpg";
import {Avatar, Box, Grid, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    title: {
        color: "orange",
    },
    subtitle: {
        color: "deepskyblue",
        textTransform: "uppercase",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
}));

const Introduction = () => {
    const classes = useStyles();



    return (
        <Box className={classes.typedContainer}>
            <Grid container justifyContent="center">
                <Avatar src={avatar}
                        alt="SAMUEL CHAU"
                        sx={{
                            width: 220,
                            height: 220,
                }}/>
            </Grid>
            <Typography className={classes.title} variant="h3">
                <ReactTyped strings={["SAMUEL CHAU"]} typeSpeed={40} />
            </Typography>

            <Typography className={classes.subtitle} variant="h4">
                <ReactTyped
                    strings={[
                        "I love programming !"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Introduction;