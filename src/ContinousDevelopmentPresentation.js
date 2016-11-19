'use babel'
// @flow

import React from 'react';
import RoleButton from "./RoleButton";
import './ContinousDevelopmentPresentation.css';

export default class ContinousDevelopmentPresentation extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="demo">

        </div>
        <div className="roles">
          <RoleButton>CEO</RoleButton>
          <RoleButton>Product Designer</RoleButton>
          <RoleButton>Product Manager</RoleButton>
          <RoleButton>Developer</RoleButton>
          <RoleButton>DevOps</RoleButton>
          <RoleButton>Operator</RoleButton>
        </div>
      </div>
    )
  }
}

ContinousDevelopmentPresentation.propTypes = {

};

ContinousDevelopmentPresentation.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
