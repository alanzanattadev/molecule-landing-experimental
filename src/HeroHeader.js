'use babel'
// @flow

import React from 'react';
import './HeroHeader.css';
import DellXPSMockup from "./DellXPSMockup";

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
        <h2 className="title">
          advanced ide<br/>
          to transform ideas into products
        </h2>
        <div className="mid-mockup">
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
