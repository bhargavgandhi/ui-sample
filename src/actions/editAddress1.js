import actions from './constants';

const editAddress1 = (id, value) => {
    return{
        type: actions.EDIT_ADDRESS1,
        field: id,
        data: {
            field: id,
            value: value
        }
    };
}

export default editAddress1;