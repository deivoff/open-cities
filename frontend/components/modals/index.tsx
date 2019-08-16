import { connect } from 'react-redux';
import { Modal } from './modal';

const mapStateToProps = ({ modals }: any) => {
  if (modals.length) {
    const { type, content } = modals[modals.length - 1];
    return {
      type,
      content
    };
  }
  return {};
};

export default connect(mapStateToProps)(Modal);
