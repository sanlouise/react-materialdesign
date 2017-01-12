/*
 *
 * Home
 *
 */

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import view from './view';
import selectHome from './selectors';

class Home extends PureComponent {}

Home.prototype.render = view;

const mapStateToProps = selectHome();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
