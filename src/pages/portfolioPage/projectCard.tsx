import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    box: {
        width: '16rem',
        height: '40vh',
        backgroundColor: "white",
        color: "black",
        padding: '1.5rem 2rem',
        marginRight: '8rem',
        borderRadius: '0 50px 0 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `1px solid white`,
        transition: 'all 0.2s ease',
        '&:hover': {
            backgroundColor: theme.palette.text.primary,
            color: "white",
            border: `1px solid white`,
        },
    },
    title: {
        fontSize: 'calc(1em + 0.5vw)',
    },
    description: {
        fontSize: 'calc(0.8em + 0.3vw)',
        fontFamily: 'Karla, sans-serif',
        fontWeight: 500,
    },
    tags: {
        borderTop: `2px solid black`,
        paddingTop: '0.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        '&:hover': {
            borderTop: `2px solid white`,
        },
    },
    tag: {
        marginRight: '1rem',
        fontSize: 'calc(0.8em + 0.3vw)',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    link: {
        backgroundColor: "black",
        color: "white",
        textDecoration: 'none',
        padding: '0.5rem calc(2rem + 2vw)',
        borderRadius: '0 0 0 50px',
        fontSize: 'calc(1em + 0.5vw)',
        '&:hover': {
            backgroundColor: "white",
            color: "black",
        },
    },
    git: {
        color: 'inherit',
        textDecoration: 'none',
        '& > *': {
            fill: theme.palette.text.primary,
        },
        '&:hover': {
            '& > *': {
                fill: "white",
            },
        },
    },
}));

const Item = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
        },
    },
};

const MotionBox = motion(Box);

const ProjectCard = (props: { data: { id: any; name: any; description: any; tags: any; demo: any; github: any; }; }) => {
    const classes = useStyles();

    const { id, name, description, tags, demo, github } = props.data;

    return (
        <MotionBox key={id} className={classes.box} variants={Item}>
            <Typography variant="h2" className={classes.title}>
                {name}
            </Typography>
            <Typography variant="h2" className={classes.description}>
                {description}
            </Typography>
            <Box className={classes.tags}>
                {tags.map((t: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, id: React.Key | null | undefined) => (
                    <Typography key={id} component="span" className={classes.tag}>
                        #{t}
                    </Typography>
                ))}
            </Box>
            <Box className={classes.footer}>
                <a href={demo} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    Visit
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className={classes.git}>
                    <GitHubIcon width={30} height={30} />
                </a>
            </Box>
        </MotionBox>
    );
};

export default ProjectCard;