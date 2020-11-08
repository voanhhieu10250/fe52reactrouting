import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movie from "./../../../components/Movie";
import Loader from "../../../components/Loader";

export default function AboutPage() {
  //state và setState bên dưới đây chỉ là cái tên mà mình cố tình đặt cho nó giống bên class thôi, chứ function
  //không có state như bên class
  const [state, setState] = useState({ listMovie: [], loading: false });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "GET",
    }).then((result) => {
      console.log(result.data);
      setState({
        ...state, //phải copy lại mọi thứ trong cái state, nếu không thì sau khi setState các dữ liệu khác sẽ bị mất
        listMovie: result.data,
        loading: false,
      });
    });
  }, []);

  const renderHTML = () => {
    const { listMovie, loading } = state;
    if (loading) return <Loader />;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="container">
      <h1>AboutPage</h1>
      <div className="row">{renderHTML()}</div>
    </div>
  );
}
