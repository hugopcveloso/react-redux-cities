import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p id="pick-city">Please pick a city...</p>

      </div>
    );
  }

  console.log(props.activeCity.name);
  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;
  return (
    <div className="active-city">
      <div className="fixed">
        <h3> {props.activeCity.name} </h3>
        <p>{props.activeCity.address}</p>
        <img src={url} width="100%" />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
