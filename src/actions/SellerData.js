/**
 * Created by aaron on 16/05/2017.
 */

import * as types from '../constants/ActionTypes';

export default function sellerdata(data) {
    return {
        type: types.SELLER_DATA,
        data: data
    }
}

