import React from "react"
import styled from "styled-components"

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const UserDP = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin: 0.4rem;
`

const UserData = styled.div`
  display: flex;
  flex-direction: column;
`
const UserName = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #171B20;
`

const UserRole = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #B7B7B7;
`
const Icon = styled.span`
  margin: 0.8rem;
  font-size: 15px;
`


const User : React.FC<any> = ({}) => {

  return (
    <UserContainer>
      <UserDP src={"https://xsgames.co/randomusers/avatar.php?g=male"} />
      <UserData>
        <UserName>John Jack</UserName>
        <UserRole>Admin</UserRole>
      </UserData>
      <Icon className="material-symbols-outlined">
        expand_more
      </Icon>
    </UserContainer>
  )
}


export default React.memo(User);