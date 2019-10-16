import React from 'react';
import PropTypes from 'prop-types';
import ReactFileReader from 'react-file-reader';
import { Button } from '@kiwicom/orbit-components';

const FileReaderAction = (props) => {

  const fileChangedHandler = (files) => {
    console.log(files)
    const file = files[0]
    const reader = new FileReader();
  
    reader.onload = evt => {
  
    }
  
    reader.onloadend = evt => {
      const result = reader.result
      console.log(result)
      props.FileDidLoad(file.name,result)
    }
    
      reader.readAsText(file)
    }
  

  return (
  <ReactFileReader fileTypes={props.Accepts} handleFiles={fileChangedHandler}>
    <Button underline>Upload</Button>
  </ReactFileReader>)
};

FileReaderAction.propTypes = {
  // bla: PropTypes.string,
  FileDidLoad: PropTypes.func,
  Accepts: PropTypes.string
};

FileReaderAction.defaultProps = {
  FileDidLoad: console.log,
  Accepts: "text/html,htm"
};

export default FileReaderAction;
