import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Course from '../Components/Courses/Course'
import LoginStudent from '../Pages/LoginStudent'
import RegisterStudent from '../Pages/RegisterStudent'
import StudentDashboard from '../Pages/StudentDashboard'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register/student"  element={<RegisterStudent/>}/>
            <Route path="/login/student"  element={<LoginStudent/>}/>
            <Route path="/student/dashboard"  element={<StudentDashboard/>}/>
            <Route path="/course" element={<Course/>}/>
            {/*<Route path="/cart" element={<Cart/>}/>*/}

        </Routes>
    </div>
  )
}

export default AllRoutes