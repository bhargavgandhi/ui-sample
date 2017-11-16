import actions from './constants';

const editName = (id, value) => {
    return{
        type: actions.EDIT_NAME,
        field: id,
        data: {
            field: id,
            value: value
        }
    };
}

export default editName;