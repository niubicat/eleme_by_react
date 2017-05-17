/**
 * Created by aaron on 16/05/2017.
 */

import { sellerUrl } from '../constants/SellerUrl';
import  sellerdata from '../actions/SellerData';

export function getSellerData() {
    return dispatch =>
        fetch(sellerUrl())
            .then(response => response.json())
            .then(json => dispatch(sellerdata(json)))
            .catch(err => { throw err; });
}

