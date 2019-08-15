import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Header } from './header';
import { openModal } from '../../store/modals/actions';
import { ICitySchema } from '../../../server/components/city/ICity';

export interface IHeaderProps {
  signHandler?: any;
  cities?: ICitySchema[];
}

const mapDispatchToProps = (dispatch: Dispatch): IHeaderProps => ({
  signHandler: () => dispatch(openModal({ type: 'auth' }))
});

const mapStateToProps = ({ cities }: any): IHeaderProps => {
  return {
    cities
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
