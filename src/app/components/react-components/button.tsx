import React from 'react';
import { Button } from '@bigcommerce/big-design';

export default class ReactButton extends React.Component<any> {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit();
  }

  render() {
    return (
      <Button onClick={() => this.handleSubmit()}>Submit</Button>
    );
  }
}