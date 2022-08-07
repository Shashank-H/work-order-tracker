import { Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeading, PageMainRow } from '../../components/AppCommon';
import FileSelector from '../../components/FileSelector';
import { Page } from '../../components/Page';
import generateOrderItem from '../../services/generateOrder';
import { uploadWorkOrder } from '../../services/uploadFile';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { addOrder, selectOrders, updateProgress } from '../../state/orderSlice';


const UploadArea = styled.div`
  width: 100%;
  height: 10rem;
  border: 1.5px dashed #C4C4C4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UploadIcon = styled.img`
  display: block;
  width: 20px;
  margin-bottom: 1rem;
`

const UploadText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #1A1A1A;
`

const LinkHere = styled.span`
  color: #3687D2;
  text-decoration: underline;
`

const UploadBtn = styled(Button)`
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  background-color:#3687D2;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    background-color: #11489a;
    color: #FFFFFF
  }
  ${({disabled})=>{
    return disabled?`
      background-color: #C4C4C4;
    `: ``;
  }}
`

const UploadPageHead = styled(PageHeading)`
  margin: auto;
  font-size: 25px;
  color: #2A2A2A;
`

const BackIcon = styled.span`
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;
  color: #2A2A2A;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
`

const AddOrderPage:React.FC<any>  = ({}) => {

  const [file,setFile]= useState<File|undefined>(undefined)

  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  function onSelect(f:File){
    setFile(f);
  }

  function trackProgress(progressEv:any){
    let percentage = Math.round( (progressEv.loaded * 100) / progressEv.total );
    dispatch(updateProgress({order_id:orders.length,progress:percentage}))
  }

  function goBack() {
    navigate(-1);
  }

  async function uploadFile(){
    if(!file) return;

    let {order, uploadData} =await generateOrderItem(file)
    dispatch(addOrder(order))
    uploadWorkOrder(uploadData,trackProgress)
    navigate(-1)
  }

  return (
    <Page>
      <PageMainRow>
        <BackIcon onClick={goBack} className="material-symbols-outlined">
            arrow_back
        </BackIcon>
        <UploadPageHead>Upload Work Orders</UploadPageHead>
      </PageMainRow>
      <FileSelector handleChange={onSelect} >
        <UploadArea>
          <UploadIcon src={"UploadIcon.png"} />
          <UploadText>
            {file ? (
              <>{file.name}</>
            ) : (
              <>
                Drag a PDF file here or <LinkHere>browse</LinkHere>
              </>
            )}
          </UploadText>
        </UploadArea>
      </FileSelector>
      <br />
      <UploadBtn disabled={!file} onClick={uploadFile}>Upload</UploadBtn>
    </Page>
  );
} 


export default React.memo(AddOrderPage);