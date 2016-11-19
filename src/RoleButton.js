'use babel'
// @flow

import React from 'react';
import './RoleButton.css'

export default class RoleButton extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <button>
        {this.props.children}
      </button>
    )
  }
}

RoleButton.propTypes = {

};

RoleButton.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
