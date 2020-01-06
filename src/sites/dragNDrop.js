
import React, {useState, useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import {converter_service} from "../converterService";

const Droparea = () => {
    //DragNDrop
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false);

    const onDrop = (event) => {
        event.preventDefault();
        setDragOver(false);
        setLoading(true);
        sendFile(event.dataTransfer.files[0])
    }

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

    function sendFile(files){
        console.log(files);


        console.log("Done!");
        converter_service.sendFile(files);
    }

        return (
            <div onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave} style={{zIndex: 100, display: 'flex' , justifyContent: 'center' , alignItems: 'center', height: '50vh', width: '90vw', border: '2px dashed white', marginTop: '4rem', borderRadius: '10px'}}>
                <AddIcon style={{fontSize: 100}} />
            </div>
        )

};

export default Droparea;
