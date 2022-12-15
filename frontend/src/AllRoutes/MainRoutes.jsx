import React from 'react'
import {Route,Routes} from "react-router-dom"
import CompanyDashboard from '../Pages/CompanyDashboard';
import CompanyLoginPage from '../Pages/CompanyLoginPage'
import CompanyRegisterPage from '../Pages/CompanyRegisterPage';

function MainRoutes() {
  return (
    <>
    <Routes>
        <Route path={"/company/dashboard"} element={<CompanyDashboard/>} />
        <Route path={"/company/register"} element={<CompanyRegisterPage/>} />
        <Route path={"/company/login"} element={<CompanyLoginPage/>} />
    </Routes>
    </>
  )
}

export default MainRoutes