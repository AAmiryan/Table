import { combineReducers } from 'redux';
import auth from './Auth/auth.reducer';
import cars from './Cars/cars.reducer';

const rootReducer = combineReducers({
    auth,
    cars,
});

export default rootReducer;
