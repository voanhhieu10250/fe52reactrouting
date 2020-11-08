import React, { useEffect } from "react";
import Movie from "./../../../components/Movie";
import Loader from "../../../components/Loader";
import { actListMovieApi } from "../ListMoviePage/modules/action";
import { connect } from "react-redux";

function HomePage(props) {
  useEffect(() => {
    props.listMovieApi();
  }, []);

  const renderHTML = () => {
    const { listMovie, loading } = props;
    if (loading) return <Loader />;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="container">
      <h1 className="home">HomePage</h1>
      <div className="row">{renderHTML()}</div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
