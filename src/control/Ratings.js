/**
 * Created by aaron on 16/05/2017.
 */

import { ratingsUrl } from '../constants/SellerUrl';

import { ratingsnormalize } from '../constants/Schemas';


import  ratingsdata from '../actions/RatingsData';


export function getRatingsData() {
    return dispatch =>
        fetch(ratingsUrl())
            .then(response => response.json())
            .then(json => {
            	const ratings = json.ratings
            	const ratingsNormalized = ratingsnormalize(ratings)
            	dispatch(ratingsdata(ratingsNormalized.entities, ratingsNormalized.result))
            	}
            )
            .catch(err => { throw err; });
}

export const downDone = 'downDone';
