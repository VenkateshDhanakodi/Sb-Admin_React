import './App.css';
import Dashboard from './Components/Dashboard';
import SideBar from './Components/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';
import NestedExample from './Components/NestedExample'
import Profile from './Components/NestedComponents/Profile';
import Account from './Components/NestedComponents/Account';
import React from 'react';
import UseRef from './Components/NestedComponents/UseRef';
import UseReducer from './Components/NestedComponents/UseReducer';
import UserContextComponent from './Components/ContextComponents/UserContextComponent';
import DashboardContextComponent from './Components/ContextComponents/DashboardContextComponent';

function App() {

  return <div id="wrapper">
    <BrowserRouter>
      <SideBar />
      <UserContextComponent>

        <Routes>
          <Route path='/dashboard' element={
            <DashboardContextComponent>
              <Dashboard />
            </DashboardContextComponent>} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/edituser/:id' element={<Edituser />} />
          <Route path='/nested-example' element={<NestedExample />}>
            <Route path='profile' element={<Profile />} />
            <Route path='account' element={<Account />} />
            <Route path='useRef' element={<UseRef />} />
            <Route path='usereducer' element={<UseReducer />} />
          </Route>
          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>
      </UserContextComponent>
    </BrowserRouter>
  </div>
}
export default App;
