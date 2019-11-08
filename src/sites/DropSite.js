import React from "react";
import { makeStyles} from "@material-ui/styles";
import {Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DropzoneAreaExample from "./dragNDrop";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#37BC7A',
        color: 'white',
        height: '80vh !important',
        width: '100vw',
        boxShadow: '0 0 20px #888888',
        borderRadius: '0 0 20px 20px',
        fontFamily: 'Helvetica',
        fontWeight: '900',
        padding: '2rem'
    }
});


export default function DropSite (){
    const classes = useStyles();
    return <Card className={classes.root}>
                <Typography variant={'h2'} style={{fontWeight: '800'}}>Team XY</Typography>
                <Typography variant={'p'} >UML to Java Converter</Typography>
        <DropzoneAreaExample></DropzoneAreaExample>

    </Card>
}

