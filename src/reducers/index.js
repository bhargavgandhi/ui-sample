import actions from '../actions/constants';

// const update = (state, mutations) =>
// Object.assign({}, state, mutations)

const reducer = function (state, action) {
    let newState;

    switch (action.type) {
        case actions.EDIT_NAME:
            newState = Object.assign({}, state, {
                name: action.data.value
            });
            break;

        case actions.EDIT_ADDRESS1:
            newState = Object.assign({}, state, {
                address1: action.data.value
            });
            break;

        case actions.EDIT_ADDRESS2:
            newState = Object.assign({}, state, {
                address2: action.data.value
            });
            break;



        case actions.ADD_TEAM:
            //newState = Object.assign({}, state, { team: [ action.data.value ]});
            return {
                ...state,
                //[action.field]: action.data.value,
                [action.field]: [...state, action.data.value],
                team: [...state.team, state[action.field]]

            }
            // newState = Object.assign({}, state);
            // newObj = { [action.field] : action.data.value}
            // newState.team[action.field] ? newState.team[action.field] = action.data.value : newState.team.push(newObj);
            // break;
        default:
            newState = state;
    }

    return newState;
}

export default reducer;