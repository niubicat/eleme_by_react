/**
 * Created by aaron on 16/05/2017.
 */

import * as types from '../constants/ActionTypes';

const initialSellerState = {
	
}

export default function goods(state = initialSellerState, action) {
    switch (action.type) {
        case types.GOODS_DATA:
            return Object.assign({}, state, {
                goods: action.result
            });

        default:
            return state;
            console.log(state)
    }

}
