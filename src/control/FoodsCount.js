/**
 * Created by aaron on 22/05/2017.
 */

import  FoodsCountData from '../actions/FoodsCountData';

export function FoodsCount(foodsCounts) {
    return dispatch => dispatch(FoodsCountData(foodsCounts))
}

export const downDone = 'downDone';