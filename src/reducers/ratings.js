/**
 * Created by aaron on 16/05/2017.
 */

import * as types from '../constants/ActionTypes';

const initialSellerState = {}

export default function ratings(state = initialSellerState, action) {
    switch (action.type) {
        case types.RATINGS_DATA:
            return Object.assign({}, state, {
            	...action.entities,
            	...action.result
            });

        default:
            return state;
    }
}
