'use babel'
// @flow

import React from 'react';
import './ProductOrientedPresentation.css';

export default class ProductOrientedPresentation extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="product-oriented-presentation-container">

      </div>
    )
  }
}

ProductOrientedPresentation.propTypes = {

};

ProductOrientedPresentation.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
