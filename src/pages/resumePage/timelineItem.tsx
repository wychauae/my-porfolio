import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import {List, ListItem, Theme, Typography} from "@mui/material";
import React from "react";


// @ts-ignore
export const TimelineItemBuild = ({time, jobTitle, companyName, location, accomplishments }) => {

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0", fontFamily: 'Ubuntu Mono' }}
                align="right"
                variant="body1"
                color="tan"
            >
                {time}
                <br></br>
                {location}
            </TimelineOppositeContent>
            <TimelineSeparator >
                <TimelineConnector />
                <TimelineDot sx={{color:'white',backgroundColor:"#ce5a57"}}>
                    <EngineeringRoundedIcon sx={{fontSize:'calc(1rem + 1vw)'}}/>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{color:'white'}}>
                <Typography sx={{fontSize: 'calc(.6rem + 1vw)', fontFamily: 'Ubuntu Mono'}}>{jobTitle}</Typography>
                <Typography color="tomato"  sx={{ fontFamily: 'Ubuntu Mono'}}>{companyName}</Typography>
                <List sx={{ listStyleType: "disc", color: "#ffedbf" }}>
                    {accomplishments.map((accomplishment:String) => (
                        <ListItem
                            disablePadding
                            sx={{ display: "list-item", fontSize: '18px'}}
                        >
                            {accomplishment}
                        </ListItem>
                    ))}
                </List>
            </TimelineContent>
        </TimelineItem>
    );
};