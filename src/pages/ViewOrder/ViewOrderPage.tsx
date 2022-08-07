import React from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '../../components/Page';


const ViewOrderPage: React.FC<any> =({}) =>{

  let {id} = useParams();

  

  return (
    <Page>
      {id}
    </Page>
  )
}

export default React.memo(ViewOrderPage);