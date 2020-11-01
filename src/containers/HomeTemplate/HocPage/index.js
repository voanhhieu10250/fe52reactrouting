import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

const ModalForm = WithModal(NhanVien); // tạo thêm 1 cái cho SanPham nữa (nếu muốn)

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>Hoc Page</h3>
        <ModalForm />
      </div>
    );
  }
}
