/*
 *
 * SmallgardenOverview
 *
 */

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import view from './view';
import selectSmallgardenOverview from './selectors';

class SmallgardenOverview extends PureComponent {}

SmallgardenOverview.prototype.render = view;

const mapStateToProps = selectSmallgardenOverview();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallgardenOverview);
