
import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import {AttachFile} from "@material-ui/icons";
import {NativeSelect} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {converter_service} from "../services/converterService";



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

        console.log("Done!");
        converter_service.sendFile(files);
    }
    render(){
        return (
            <DropzoneArea
                acceptedFiles={[".graphml"]}
                filesLimit={1}
                onChange={this.handleChange.bind(this)}
                dropzoneText = "Upload your file here!"
                maxWidth = "10"
            />
        )
    }
}

export default DropzoneAreaExample;
