import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Header } from './header';
import { openModal } from '../../store/modals/actions';

export interface IHeaderProps {
  signHandler?: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signHandler: () => dispatch(openModal({ type: 'auth' }))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
