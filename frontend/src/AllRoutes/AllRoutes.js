import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginStudent from '../Pages/LoginStudent'
import RegisterStudent from '../Pages/RegisterStudent'
import StudentApplication from '../Pages/StudentApplication'
import StudentDashboard from '../Pages/StudentDashboard'
import CompanyDashboard from '../Pages/CompanyDashboard';
import CompanyLoginPage from '../Pages/CompanyLoginPage'
import CompanyRegisterPage from '../Pages/CompanyRegisterPage';
import InternShip from '../Pages/InternShip'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/register/student"  element={<RegisterStudent/>}/>
            <Route path="/login/student"  element={<LoginStudent/>}/>
            <Route path="/student/dashboard"  element={<PrivateRoute><StudentDashboard/></PrivateRoute>}/>
            <Route path="/profile/student"  element={<PrivateRoute><StudentApplication/></PrivateRoute>}/>
            <Route path={"/company/dashboard"} element={<CompanyDashboard/>} />
            <Route path={"/company/register"} element={<CompanyRegisterPage/>} />
             <Route path={"/company/login"} element={<CompanyLoginPage/>} />
             <Route path={"/internship"} element={<InternShip/>} />


        </Routes>
    </div>
  )
}

export default AllRoutes