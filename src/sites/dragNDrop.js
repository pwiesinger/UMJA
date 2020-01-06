
import React, {useState, useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import {converter_service} from "../converterService";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import saveFile from 'save-as-file';

const Droparea = () => {
    //DragNDrop
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [filereader, setFilereader] = useState(new FileReader());


    
    const onDrop = (event) => {
        event.preventDefault();
        setDragOver(false);
        setLoading(true);
        console.log(event.dataTransfer.files[0]);

        if(!event.dataTransfer.files[0].name.includes('.graphml')){
            handleClickOpen();
            return;
        }
        sendFile(event.dataTransfer.files[0])
    };

    function onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        setDragOver(true)
    }

    function onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        setDragOver(false)
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function fileFinished(e) {
        const content = filereader.result;
        console.log(content);
        converter_service.sendFile(content).then((value) => {
            saveFile(value, "umja_files.zip");
        });
    };

    const sendFile = (files) =>{
        console.log(files);

        console.log(filereader);
        filereader.onloadend = fileFinished;
        filereader.readAsText(files);
    }

        return (

            <div onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave} style={{zIndex: 100, display: 'flex' , justifyContent: 'center' , alignItems: 'center', height: '50vh', width: '90vw', border: '2px dashed white', marginTop: '4rem', borderRadius: '10px'}}>
                <AddIcon style={{fontSize: 100}} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle >{"Please upload valid File!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This Converter only works with .graphml files!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Okay
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )

};

export default Droparea;
