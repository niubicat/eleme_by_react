/**
 * Created by aaron on 16/05/2017.
 */

import { sellerUrl } from '../constants/SellerUrl';

import { sellerList } from '../constants/Schemas';


import  sellerdata from '../actions/SellerData';

import { schema, normalize } from 'normalizr';


export function getSellerData() {
    return dispatch =>
        fetch(sellerUrl())
            .then(response => response.json())
            .then(json => {
            	const seller = json.seller;
               
            	const sellerNormalized = normalize(seller, {seller: sellerList});
                console.log(sellerNormalized)
            	dispatch(sellerdata(sellerNormalized.entities, sellerNormalized.result))
            	}
            )
            .catch(err => { throw err; });
}

export const downDone = 'downDone';
