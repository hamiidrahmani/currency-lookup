import { connect } from 'react-redux';
import Countries from './Countries';
import { fetchCountriesStartAsync } from '../../redux/country/actions';

const mapStateToProps = (state) => ({
  country: state.country,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountriesStartAsync: () => dispatch(fetchCountriesStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
