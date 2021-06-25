import React from 'react';
import '../../assets/css/wrapper.css';

function Wrapper(props) {
  return <main className='wrapper'>{props.children}</main>;
};

export default Wrapper;