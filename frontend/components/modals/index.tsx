import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Modal } from './modal';
import { closeModal } from '../../store/modals/actions';
// import { IModal } from '../../store/modals/types';

export interface IModalProps {
  handlerClose?: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handlerClose: () => dispatch(closeModal())
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
