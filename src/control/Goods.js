/**
 * Created by aaron on 16/05/2017.
 */

import { goodsUrl } from '../constants/SellerUrl';

import { goodsList } from '../constants/Schemas';


import  goodsdata from '../actions/GoodsData';

import { schema, normalize } from 'normalizr';


export function getGoodsData() {
    return dispatch =>
        fetch(goodsUrl())
            .then(response => response.json())
            .then(json => {
            	const goods = json.goods;
                
            	// const goodsNormalized = normalize(goods, goodsList)
             //    console.log(goodsNormalized)
            	// dispatch(goodsdata(goodsNormalized.entities, goodsNormalized.result))
                dispatch(goodsdata(goods))

            	}
            )
            .catch(err => { throw err; });
}

export const downDone = 'downDone';
