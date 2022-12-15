import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginStudent from '../Pages/LoginStudent'
import RegisterStudent from '../Pages/RegisterStudent'
import StudentApplication from '../Pages/StudentApplication'
import StudentDashboard from '../Pages/StudentDashboard'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/register/student"  element={<RegisterStudent/>}/>
            <Route path="/login/student"  element={<LoginStudent/>}/>
            <Route path="/student/dashboard"  element={<StudentDashboard/>}/>
            <Route path="/profile/student"  element={<StudentApplication/>}/>


        </Routes>
    </div>
  )
}

export default AllRoutes