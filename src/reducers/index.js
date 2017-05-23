import { combineReducers } from 'redux';
import seller from './seller';
import goods from './goods';
import ratings from './ratings';
import foodscountnum from './foods';


// 合并reducers
const rootReducer = combineReducers({
    seller,
    goods,
    ratings,
    foodscountnum
});

export default rootReducer;
