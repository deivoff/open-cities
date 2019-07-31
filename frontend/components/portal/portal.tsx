import React from 'react';
import ReactDOM from 'react-dom';

export interface IPortal {
  selector: string;
  children: any;
}

export class Portal extends React.Component<IPortal> {
  element: any;

  componentDidMount() {
    this.element = document.querySelector(this.props.selector);
    this.forceUpdate();
  }

  render() {
    if (this.element === undefined) {
      return null;
    }
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}
