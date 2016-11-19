'use babel'
// @flow

import React from 'react';
import './Scene.css';

export default class Scene extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="scene">
        {this.props.children}
      </div>
    )
  }
}

Scene.propTypes = {

};

Scene.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
