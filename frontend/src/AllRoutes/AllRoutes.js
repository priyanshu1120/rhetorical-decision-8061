import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginStudent from '../Pages/LoginStudent'
import RegisterStudent from '../Pages/RegisterStudent'
import StudentApplication from '../Pages/StudentApplication'
import StudentDashboard from '../Pages/StudentDashboard'
import CompanyDashboard from '../Pages/CompanyDashboard';
import CompanyLoginPage from '../Pages/CompanyLoginPage'
import CompanyRegisterPage from '../Pages/CompanyRegisterPage';
import InternShip from '../Pages/InternShip'
import Course from '../Components/Courses/Course'
import Cart from '../Components/Cart/Cart'
import Home from '../Components/Home/Home'

const AllRoutes = () => {
  // Ayush
        const [cartItems, setCartItems] = useState([]);
        console.log(cartItems.length, "app");

        const handleAddProduct = (product) => {
          const ProductExist = cartItems.find((item) => item.id === product.id);
          if (!ProductExist) {
            setCartItems([...cartItems, product]);
          }
        };
        const handleCartClear = () => {
          setCartItems([]);
        };
  //
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/profile/student" element={<StudentApplication />} />
        <Route path={"/company/dashboard"} element={<CompanyDashboard />} />
        <Route path={"/company/register"} element={<CompanyRegisterPage />} />
        <Route path={"/company/login"} element={<CompanyLoginPage />} />
        <Route path={"/internship"} element={<InternShip />} />
        <Route
          path="/courses"
          element={<Course handleAddProduct={handleAddProduct} />}
        />
        <Route
          path="/cart"
          element={<Cart item={cartItems} handleCartClear={handleCartClear} />}
        />
      </Routes>
    </div>
  );
}

export default AllRoutes