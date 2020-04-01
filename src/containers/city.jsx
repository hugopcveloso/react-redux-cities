import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveCity } from '../actions/index';

const City = (props) => {
  return (
    <li
      className='list-group-item'
      onClick={() => props.setActiveCity(props.city)}
      >
       {props.city.name}
    </li>
  );
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActiveCity }, dispatch);
};

export default connect(null, mapDispatchToProps)(City);
