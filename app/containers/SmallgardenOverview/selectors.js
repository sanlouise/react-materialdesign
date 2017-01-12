import { createSelector } from 'reselect';

/**
 * Direct selector to the smallgardenOverview state domain
 */
const selectSmallgardenOverviewDomain = () => (state) => state.get('smallgardenOverview');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SmallgardenOverview
 */

const selectSmallgardenOverview = () => createSelector(
  selectSmallgardenOverviewDomain(),
  (substate) => substate.toJS()
);

export default selectSmallgardenOverview;
export {
  selectSmallgardenOverviewDomain,
};
