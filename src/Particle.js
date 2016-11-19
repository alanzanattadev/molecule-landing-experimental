'use babel'
// @flow

import React from 'react';
import 'particles.js';

export default class Particle extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);

    this.id = "particle-root";
  }

  componentDidMount() {
    window.particlesJS.load(this.id, this.props.jsonPath, function() {
      console.log('callback - particles.js config loaded');
    });
  }

  render() {
    return (
      <div style={{height: '100vh', width: '100vw', display: 'flex', position: 'fixed', zIndex: '-1'}}>
        <div id={this.id} style={{flex: 1, backgroundColor: '#000'}}/>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '80vh'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Particle.propTypes = {

};

Particle.defaultProps = {
  jsonPath: './particles.json'
};

type DefaultProps = {
  jsonPath: string,
};

type Props = {
  jsonPath: string,
};

type State = {

};
