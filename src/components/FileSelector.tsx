import React, { useCallback } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import styled from "styled-components";

//!TODO: For this component to be truly generic, we need to take accept parameter as well
interface FileSelectorProps{
  handleChange: (f:File) => void;
  children: React.ReactNode;
  overlayChild?: React.ReactNode;
  // accept: Array<string>;
}

type OnDropFn = <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void

const SelectorContainer = styled.div`
  position: relative;
`

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000044;
  animation: animateOpacity 2s ease-out infinite;
`


const FileSelector : React.FC<FileSelectorProps> = ({handleChange, children, overlayChild}) =>{

  const onDrop : OnDropFn = useCallback((acceptedFiles) => {
    handleChange(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept:{
      "application/pdf":[".pdf"]
    }
  })


  return (
    <SelectorContainer {...getRootProps()}>
      <input {...getInputProps()} />
        {children}
        {isDragActive &&
          <OverlayContainer>
            {overlayChild}
          </OverlayContainer>
        }
    </SelectorContainer>
  )
}


export default React.memo(FileSelector);