import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';
import { AppSideBar } from './components/AppSideBar';
import { MainContent, MainLayout } from './components/LayoutStyled';
import { AddOrderPage } from './pages/AddOrder/AddOrderPage';
import { OrderPage } from './pages/Orders/OrderPage';
import { ViewOrderPage } from './pages/ViewOrder/ViewOrderPage';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        {/* <SideBar>
          <NavLink to={"add-order"}>go to add</NavLink>
        </SideBar> */}
        <AppSideBar />
          <MainContent>
            <AppHeader />
            <Routes>
              <Route path="/" element={<OrderPage />} />
              <Route path="orders" element={<OrderPage />} />
              <Route path="add-order" element={<AddOrderPage />} />
              <Route path="view-order/:id" element={<ViewOrderPage/>} />
              {/* <Route path="details" element={<AddOrderPage />} /> */}
              <Route path="config" element={<>Config Page</>} />
              <Route path="team" element={<>Team Page</>} />

            </Routes>
          </MainContent>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
