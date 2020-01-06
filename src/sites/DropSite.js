import React from "react";
import { makeStyles} from "@material-ui/styles";
import {Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Droparea from "./dragNDrop";

const useStyles = makeStyles({
    root: {
        background: "#2b3fa8",
        color: 'white',
        height: '80vh !important',
        boxShadow: '0 0 20px #888888',
        borderRadius: '0 0 20px 20px',
        fontFamily: 'Helvetica Neue',
        fontWeight: '900',
        padding: '2rem'
    }
});


export default function DropSite (){
    const classes = useStyles();
    return <Card className={classes.root}>
                <Typography variant={'h3'} >UML to Java Converter</Typography>
                <Typography variant={'p'} >Drop your .graphml File into the Dropzone.</Typography>

        <Droparea/>
    </Card>
}

