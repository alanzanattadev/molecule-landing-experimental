'use babel'
// @flow

import React from 'react';
import './PluginsPresentation.css';

export default class PluginsPresentation extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="plugins-presentation-container">

      </div>
    )
  }
}

PluginsPresentation.propTypes = {

};

PluginsPresentation.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
