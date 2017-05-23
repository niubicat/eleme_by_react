/**
 * Created by aaron on 22/05/2017.
 */

import * as types from '../constants/ActionTypes';

const initialSellerState = {

}

export default function foods(state = initialSellerState, action) {
    switch (action.type) {
        case types.FOODSCOUNT:
            return Object.assign({}, state, {
                count: action.foodsCounts
            });

        default:
            return state;
    }
}
