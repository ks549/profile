import React from "react";
import HomeComponent from './HomeComponent.jsx';
import { connect } from 'react-redux';

const App = props => {
  return (
    <>
      <div className='gallery'>
        <HomeComponent {...props} />
      </div>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  }
}

export default connect(mapStateToProps)(App);
