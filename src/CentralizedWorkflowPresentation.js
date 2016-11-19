'use babel'
// @flow

import React from 'react';
import './CentralizedWorkflowPresentation.css';

export default class CentralizedWorkflowPresentation extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="centralized-workflow-presentation-container">

      </div>
    )
  }
}

CentralizedWorkflowPresentation.propTypes = {

};

CentralizedWorkflowPresentation.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
