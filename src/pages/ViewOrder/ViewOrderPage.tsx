import { useParams } from 'react-router-dom';

import { Page } from '../../components/Page';


export const ViewOrderPage: React.FC<any> =({}) =>{

  let {id} = useParams();

  

  return (
    <Page>
      {id}
    </Page>
  )
}