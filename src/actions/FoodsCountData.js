/**
 * Created by aaron on 22/05/2017.
 */

import * as types from '../constants/ActionTypes';

export default function FoodsCountData(foodsCounts) {
    return {
        type: types.FOODSCOUNT,
        foodsCounts
    }
}