'use babel'
// @flow

import React from 'react';
import './NewsLetterForm.css';

export default class NewsLetterForm extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="news-letter-form-container">

      </div>
    )
  }
}

NewsLetterForm.propTypes = {

};

NewsLetterForm.defaultProps = {

};

type DefaultProps = {

};

type Props = {

};

type State = {

};
