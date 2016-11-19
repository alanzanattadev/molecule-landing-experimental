'use babel'
// @flow

import React from 'react';
import DellXPSMockup from "./DellXPSMockup";
import './HeroHeader.css';

export default class HeroHeader extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="mockup">
          <DellXPSMockup/>
        </div>
        <h1>Molecule</h1>
      </header>
    )
  }
}

HeroHeader.propTypes = {

};

HeroHeader.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
