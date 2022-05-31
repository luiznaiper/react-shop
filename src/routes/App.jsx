import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { PasswordRecovery } from "../containers/PasswordRecovery";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact  path="/password-recovery" element={<PasswordRecovery />} />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
