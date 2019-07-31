import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Header } from './header';
import { openModal } from '../../store/modals/actions';
import { AuthModal } from '../modals/authModal';

const mapStateToProps = (state: any) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signHandler: () => dispatch(openModal(AuthModal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
