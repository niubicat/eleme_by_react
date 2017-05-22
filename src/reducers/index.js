import { combineReducers } from 'redux';
import seller from './seller';
import goods from './goods';
import ratings from './ratings';



// 合并reducers
const rootReducer = combineReducers({
  seller,
  goods,
  ratings
});

export default rootReducer;
