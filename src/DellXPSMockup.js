'use babel'
// @flow

import React from 'react';
import './DellXPSMockup.css';

export default class DellXPSMockup extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <img src={require('../public/dell-xps-15/device-with-shadow/xps-15.png')} style={{position: 'relative', height: 'auto', maxWidth: '80vw'}}/>
    )
  }
}

DellXPSMockup.propTypes = {

};

DellXPSMockup.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
