import { schema, normalize } from 'normalizr';

const sellerSchema = new schema.Entity('seller');
const supportsSchema = new schema.Entity('supports');
const sellerList = new schema.Array('sellerSchema');


sellerSchema.define({
	supports: supportsSchema
});

export {
	sellerList
}

const goodsSchema = new schema.Entity('goods');
const goodsList = new schema.Array('goodsSchema');


export {
	goodsList
}


const ratingsSchema = new schema.Entity('ratings');
const recommendSchema = new schema.Entity('recommend');
const ratingsList = new schema.Array('ratingsSchema');


ratingsSchema.define({
	recommend: recommendSchema
});

export {
	ratingsList
}
