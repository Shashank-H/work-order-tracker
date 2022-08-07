import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SideBar } from './LayoutStyled';

const AppLogo = styled.img`
  width: 100%;
`

const SidebarNavItem = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 0.5rem;
  margin-bottom: 5px;
  color: #4B4B4B;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  ${({active})=>{
    return active?`
      border-radius: 5px;
      background-color: #F2F2F2;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: #444CA3;
      :hover{
        opacity: 0.8;
      }
    `: ``;
  }}
  :hover{
    background-color: #F2F2F2;
    opacity: 0.3;
  }
`

const NavIcon = styled.span`
  margin-right: 0.8rem;
`

const Gap = styled.div`
  height: 70px;
`

const createNavItem = (icon: React.ReactNode, text:React.ReactNode) : React.FC<{isActive:boolean}> => ({isActive,...props})=>{
  return (
    <SidebarNavItem active={isActive}>
      {icon} {text}
    </SidebarNavItem>
  )
}

const NavMain = styled.div`
  flex: 1;
  margin-top:70px;
`

const AppSideBar : React.FC<any> = ({}) =>{

  return (
    <SideBar>
      <AppLogo src="CompanyLogo.png" />
      <NavMain>
        <NavLink
          to="/"
          children={createNavItem(
              <NavIcon className="material-symbols-outlined">
                rocket_launch
              </NavIcon>,
              "Projects"
          )}
        />

        <NavLink
          to="team"
          children={createNavItem(
              <NavIcon className="material-symbols-outlined">
                group
              </NavIcon>,
              "Team"
          )}
        />
      </NavMain>
      
      
    </SideBar>
  );
}


export default React.memo(AppSideBar);