import expect from 'expect';
import smallgardenOverviewReducer from '../reducer';
import { fromJS } from 'immutable';

describe('smallgardenOverviewReducer', () => {
  it('returns the initial state', () => {
    expect(smallgardenOverviewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
