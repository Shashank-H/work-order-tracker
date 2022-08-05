import { Layout } from 'antd';
import styled from 'styled-components';

const { Header, Footer, Content, Sider } = Layout;

export const Head = styled(Header)`
  padding: 1.5rem 1.5rem 0;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #23263b;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: #fff;
  display: flex;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid #F3F3F3;
`;

export const MainLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const SideBar = styled(Sider)`
  flex:1.3 !important;
  background-color: #FFFFFF;
  padding: 1rem 1.5rem;
  border-right: 1px solid #F3F3F3;
  max-width: max-content !important;
`;

export const Foot = styled(Footer)`

`;

export const MainContent = styled(Content)`
  flex: 8.7;
  height: 100%;
  overflow: auto;
  background-color: white;
`;
