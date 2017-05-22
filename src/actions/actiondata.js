/**
 * Created by aaron on 16/05/2017.
 */


// reducer
import * as types from '../constants/ActionTypes';



export default function seller() { 
   
    return { 
    	sellerId: allsellerId.concat(huilong)
    	seller:[
    		{
    		sellerId: huilong
    		name: huilong 
    		description:huilong
    		deliveryTime:huilong
    		score:huilong
    		supportsId: huilong,
    		goodsId: huilong,
    		ratingsId:huilong
    		}
    	]
    }
}



funcion supports(supportsId) {
	return {
		supportsId: allsupportsId.concat(huilong),
		supports: [
			{
				supportsId: huilong,
				description:huilong
			}
		]
	}
}

function goods(goodsId) {
	return {
		goodsId: allgoodsId.concat(goodsId),
		goods: [
			{
				goodsId:huilong,
				name,
				type,
				foodsId: huilong
			}
		]
	}
}

function foods() {
	return {
		foodsId: allfoodsId.concat(huilongfoods),
		foods: [
			{
				foodsId: huilong,
				name,
				price,
				oldPrice,
				description,
				info,
				ratingsId: huilong
			}
		]
	}
}

function ratings() {
	return {
		ratingsId: allratingsId.concat(huilong),
		ratings: [
			{
				ratingsId:huilong,
				userId: huilong
			}
		]
	}
}

function user() {
	userId: alluser.concat(userId),
	comments: [
		{
			userId: huilong,
			username:huilong
			avatar: huilong
			goodscommentsId: huilong
			ratingscommentsId: huilong
		}
	]
}

function goodscomments() {
	goodscommentsId: allgoodscommentsId.concat(goodscommentsId),
	goodscomments: [
		{
			goodscommentsId: huilong,
			rateTime: huilong,
			rateType: huilong,
			goodscomments: huilong
		}
	]
}

function ratingscomments() {
	ratingscommentsId: allratingscommentsId.concat(ratingscommentsId)
	ratingscomments: [
		{
			ratingscommentsId: huilong,
			rateTime: huilong,
			rateType: huilong,
			ratingscomments: huilong
		}
	]
}



