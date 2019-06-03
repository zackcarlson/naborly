import React from 'react';
import './Scroll.css';
import ScrollUpButton from 'react-scroll-up-button';

const Scroll = () => (
  <ScrollUpButton
    ContainerClassName='scroll-container'
    TransitionClassName='scroll-transition'
  />
);

export default Scroll;