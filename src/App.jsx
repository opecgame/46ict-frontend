import { useState } from "react";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import HomePage from "./page/Home";
import LoginPage from "./page/Login";
import RegisterPage from "./page/Register";
import AdminHomePage from "./page/admin/Home";
import DashboardPage from "./page/admin/Dashboard";
import EditUserPage from "./page/admin/EditUser";
import EditDoctorPage from "./page/admin/EditDoctor";
import AddUserPage from "./page/admin/AddUser";
import AddDoctorPage from "./page/admin/AddDoctor";
import ProductsPage from "./page/Products";
import ProductPage from "./page/Product";
import Navbar from "./components/Navbar";
import ProductEditPage from "./page/ProductEdit";
import ProductAddPage from "./page/ProductAdd";
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<ProductsPage />} />
            <Route path="add" element={<ProductAddPage />} />
            <Route path=":id" element={<Outlet />}>
              <Route index element={<ProductPage />} />
              <Route path="edit" element={<ProductEditPage />} />
            </Route>
          </Route>

          {/* <Route path="/admin" element={<Outlet />}>
            <Route index element={<AdminHomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="user" element={<AddUserPage />} />
            <Route path="doctor" element={<AddDoctorPage />} />
            <Route path="edit" element={<Outlet />}>
              <Route path="user" element={<EditUserPage />} />
              <Route path="doctor" element={<EditDoctorPage />} />
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
