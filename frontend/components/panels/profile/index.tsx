import { connect } from 'react-redux';
import { ProfilePanel } from './profile';

const mapStateToProps = ({ profile }: any) => {
  return {
    profile
  };
};

export default connect(mapStateToProps)(ProfilePanel);
