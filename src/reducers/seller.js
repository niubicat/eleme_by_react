/**
 * Created by aaron on 16/05/2017.
 */

import * as types from '../constants/ActionTypes';

const initialSellerState = {
    data: {},
    seller: {
        seller: {
            name: null,
            description: null,
            deliveryTime: 1,
            score: 1,
            serviceScore: 1,
            foodScore: 1,
            supports: [
                {
                    type: 0,
                    description: 112
                },
                {
                    type: 1,
                    description: 113
                },
                {
                    type: 2,
                    description: 114
                },
                {
                    type: 3,
                    description: 115
                },
                {
                    type: 4,
                    description: 116
                }
            ],
            avatar: ''
        },
        goods:[
            {
                name: null
            }
        ],

    }
}

export default function seller(state = initialSellerState, action) {
    switch (action.type) {
        case types.SELLER_DATA:
            return Object.assign({}, state, {
                seller: action.data
            });

        default:
            return state;
    }
}
