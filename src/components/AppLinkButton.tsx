import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppLinkButton = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  margin-left: 2rem;
  color: #FFFFFF;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background-color:#3687D2;
  :hover{
    background-color: #11489a;
    color: #FFFFFF
  }
`