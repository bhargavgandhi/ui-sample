import actions from './constants';

const editAddress2 = (id, value) => {
    return{
        type: actions.EDIT_ADDRESS2,
        field: id,
        data: {
            field: id,
            value: value
        }
    };
}

export default editAddress2;