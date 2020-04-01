import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city';

import { setCities } from '../actions/index';

class CityList extends Component {
  UNSAFE_componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city, index) => {
          return (
            <City
              key={city.name}
              city={city}
              tabIndex={index}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCities }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
