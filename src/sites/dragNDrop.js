import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import {AttachFile} from "@material-ui/icons";
import {NativeSelect} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';



class DropzoneAreaExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            files: []
        };
    }
    handleChange(files){
        this.setState({
            files: files

        });
    }
    render(){
        return (
            <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center', height: '50vh', width: '90vw', border: '2px dashed white', marginTop: '4rem', borderRadius: '10px'}}>
                <AddIcon style={{fontSize: 100}} />
            </div>
        )
    }
}

export default DropzoneAreaExample;