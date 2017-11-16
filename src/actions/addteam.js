import actions from './constants';

const addTeamName = (id, value) => {
    return{
        type: actions.ADD_TEAM,
        field: id,
        data: {
            field: id,
            value: value
        }
    };
}

export default addTeamName;