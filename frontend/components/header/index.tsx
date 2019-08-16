import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Header } from './header';
import { openModal } from '../../store/modals/actions';
import { ICitySchema } from '../../../server/components/city/types';
import { IUserSchema } from '../../../server/components/user/types';

export interface IHeaderProps {
  signHandler?: any;
  cities?: ICitySchema[];
  profile?: IUserSchema;
}

const mapDispatchToProps = (dispatch: Dispatch): IHeaderProps => ({
  signHandler: () => dispatch(openModal({ type: 'auth' }))
});

const mapStateToProps = ({ cities, profile }: any): IHeaderProps => {
  return {
    cities,
    profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
