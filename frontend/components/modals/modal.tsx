import * as React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

interface IModalProps {
  opened?: boolean;
  modals: any;
}

const mapStateToProps = (state: any): IModalProps => {
  return {
    modals: state.modals
  };
};

class Modal extends React.Component<IModalProps> {
  el: HTMLDivElement | undefined;

  portal: Element | null | undefined;

  constructor(props: IModalProps) {
    super(props);

    if (document) {
      this.el = document.createElement('div');
      this.portal = document.querySelector('#modal');
    }
  }

  componentDidMount() {
    if (document && this.el && this.portal) {
      this.portal.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (document && this.el && this.portal) {
      this.portal.removeChild(this.el);
    }
  }

  render() {
    return this.el ? ReactDOM.createPortal(this.props.modals, this.el) : null;
  }
}

export default connect(mapStateToProps)(Modal);
