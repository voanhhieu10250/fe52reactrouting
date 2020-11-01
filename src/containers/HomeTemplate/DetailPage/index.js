import React, { Component } from "react";
import { actDetailPageApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDetailMovie(id);
  }

  renderTable = () => {
    const { data } = this.props;
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key="item">
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>
              <Link className="btn btn-success" to="/">
                Booking
              </Link>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h3>DetailPage</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={data && data.hinhAnh} />
          </div>
          <div className="col-md-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ten Phim</td>
                  <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{data && data.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <td>Cum rap</td>
                  <td>Ten rap</td>
                  <td>Gio chieu</td>
                  <td>Ngay chieu</td>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailPageReducer.loading,
    data: state.detailPageReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(actDetailPageApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
