import * as actionTypes from './dashboard.action-types';
import { dashboard, Dashboard, Places } from './dashboard.state';

interface Action {
    type: string;
    places?: Places;
}

export function dashboardReducer(state: Dashboard = dashboard, action: Action): Dashboard {
    switch (action.type) {
        case actionTypes.INITIALIZE_APP:
            return { ...state, isInitializingApp: true };
        case actionTypes.INITIALIZE_APP_SUCCESS:
            return { ...state, isInitializingApp: false };
        case actionTypes.INITIALIZE_APP_FAILED:
            return { ...state, isInitializingApp: false };
        case actionTypes.UPDATE_PLACES:
            return { ...state, places: action.places };
        default:
            return state;
    }
}
