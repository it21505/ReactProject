import { createStore , combineReducers , applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initialFeedback } from './forms';

export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            dishes : Dishes,
            promotions : Promotions ,
            leaders : Leaders ,
            comments : Comments,
            ...createForms({
                feedback: initialFeedback
            })
        }),

        applyMiddleware(thunk,logger)

    );

    return store;

    
}
