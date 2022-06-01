import {combineReducers} from 'redux';
import CharacterListReducer from './CharacterListReducer';
import CharacterReducer from './CharacterReducer';

export default combineReducers({
    charactersList : CharacterListReducer,
    characters : CharacterReducer
})