import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";

function AdminLayout(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        //Nếu chưa đăng nhập thì không được vào trang Admin
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />; //Tự động trở về trang auth nếu chưa đăng nhập admin
      }}
    />
  );
}
