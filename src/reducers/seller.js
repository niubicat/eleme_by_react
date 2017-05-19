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
                },
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
                },
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
        goods: [
            {
                name: 11,
                foods: [
                    {
                        name: 323,
                        description:363,
                        rating:203,
                        price:4095,
                        oldPrice:40591
                    }
                ]
            },
            {
                name: 12,
                foods: [
                    {
                        name: 322,
                        description:473,
                        rating:202,
                        price:30422,
                        oldPrice:330
                    }
                ]
            },
            {
                name: 13,
                foods: [
                    {
                        name: 325,
                        description:348,
                        rating:9,
                        price:405,
                        oldPrice:4088
                    }
                ]
            },
            {
                name: 14,
                foods: [
                    {
                        name: 3234,
                        description:3849,
                        rating:475,
                        price:2394,
                        oldPrice:7747
                    }
                ]
            },
            {
                name: 11,
                foods: [
                    {
                        name: 323,
                        description:363,
                        rating:203,
                        price:4095,
                        oldPrice:40591
                    }
                ]
            },
            {
                name: 12,
                foods: [
                    {
                        name: 322,
                        description:473,
                        rating:202,
                        price:30422,
                        oldPrice:330
                    }
                ]
            },
            {
                name: 13,
                foods: [
                    {
                        name: 325,
                        description:348,
                        rating:9,
                        price:405,
                        oldPrice:4088
                    }
                ]
            },
            {
                name: 14,
                foods: [
                    {
                        name: 3234,
                        description:3849,
                        rating:475,
                        price:2394,
                        oldPrice:7747
                    }
                ]
            },
            {
                name: 11,
                foods: [
                    {
                        name: 323,
                        description:363,
                        rating:203,
                        price:4095,
                        oldPrice:40591
                    }
                ]
            },
            {
                name: 12,
                foods: [
                    {
                        name: 322,
                        description:473,
                        rating:202,
                        price:30422,
                        oldPrice:330
                    }
                ]
            },
            {
                name: 13,
                foods: [
                    {
                        name: 325,
                        description:348,
                        rating:9,
                        price:405,
                        oldPrice:4088
                    }
                ]
            },
            {
                name: 14,
                foods: [
                    {
                        name: 3234,
                        description:3849,
                        rating:475,
                        price:2394,
                        oldPrice:7747
                    }
                ]
            }
        ]
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
