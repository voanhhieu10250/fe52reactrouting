import React, { Component } from "react";
import Axios from "axios";
import Movie from "./../../../components/Movie";
import { actListMovieApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.listMovieApi();
  }

  renderHTML = () => {
    const { listMovie } = this.props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h1>ListMoviePage</h1>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
