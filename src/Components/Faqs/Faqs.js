import React from 'react';
import useStyles from './FaqsStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';


export default function ControlledAccordions() {


    const classes = useStyles();
    //? Each of the Accordion components has an exanded prop?\\
    const [expanded, setExpanded] = React.useState(false);

    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    

    return (
        <Box className={classes.root}>


            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        Does price include setup and delivery?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Usually there may be a small trip charge based off of further out locations.  Also there may be an additional fee if it is not the "typical" delivery or setup.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        Do you deliver to other cities?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Absolutely! We will travel anywhere. Please call us and we will gladly create a custom quote for you.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        Are there special licenses or permits needed for the height of the screen?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Generally not. However, every locality has different codes. I have never encountered a customer where this was a requirement for a 24’. We have seen requirements for engineering documents and permits for very large screens in states like California.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        Does the standard 2.5 hour rental time include your setup time?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        No. The setup and breakdown is on us. The 2.5 hours begins as soon as we are done setting up, and at the time we have agreed to.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        Does it have to be dark to see a picture?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes! Outdoor movie projection is similar to the technology you see in a movie theater. The difference is that instead of turning out the lights, the sun goes down. Calculate what time you can start your movie by using this handy link from the <a href="#">US Naval Observatory</a>.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        When setting up the screen, does sun(set) direction determine the placement of the screen?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        YES! If the audience is facing west and the screen is facing east, you will be able to start your movie earlier that with other screen placements. The reason for this is that the screen is a highly reflective surface and sunlight hitting it directly makes the start time about 15 minutes later.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        How much dropoff is there using rear projection versus front projection?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        The benefits and aesthetics of front versus rear projection go beyond light loss. Loss is about 10%. Again your application requirements are the important issue. Both front and rear have benefits and drawbacks.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header" >
                    <Typography className={classes.heading}>
                        What about wind and wind rating?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                    DO NOT USE YOUR SCREEN IN WINDS EXCEEDING 15MPH. USE EXTREME CAUTION IN HIGH WINDS. APPROACHING WEATHER CAN BE DANGEROUS. A conservative approach to public and equipment safety is your strongest tool in maintaining the safety of your audience and is key to any risk management strategy relating to public events. When there is severe weather approaching on radar, get the screen down!
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </Box>
    );
}