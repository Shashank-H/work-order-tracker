import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Head } from './LayoutStyled';
import User from './User';


const HeadingText = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #23263B;
  padding-bottom: 0.8rem;
`

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`

const HeaderNav = styled.div`
  display: flex;
`

const HeaderNavItem = styled.div<{active:boolean}>`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: #23263B;
  padding: 1rem;
  padding-bottom: 0.8rem;
  ${({active})=>{

    return active? `
      border-bottom: 0.26rem solid #444CA3;
      padding-bottom: 0.54rem;
    `:`
      opacity: 0.6;
      font-weight: 400;
    `;

  }}
`
const createNavItem = (title:string) : React.FC<{isActive:boolean}> => ({isActive,...props})=>{
  return (
    <HeaderNavItem active={isActive}>
      {title}
    </HeaderNavItem>
  )
}



const AppHeader: React.FC<any> = ({}) =>{

  return (
    <Head>
      <HeaderLeft>
        <HeadingText > My Company </HeadingText>
        <HeaderNav>
          <NavLink to="/" children={createNavItem("Details")} />
          <NavLink to="config" children={createNavItem("Configuration")} />
        </HeaderNav>
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Head>
  )
}


export default React.memo(AppHeader);