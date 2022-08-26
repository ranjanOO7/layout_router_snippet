import {
    GET_ADMIN_DATA_REQUEST,
    GET_ADMIN_DATA_SUCCESS,
    GET_ADMIN_DATA_FAIL,
} from "../constants/adminConstant";

export const getAdminDataReducer = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_ADMIN_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ADMIN_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_ADMIN_DATA_FAIL:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        default:
            // console.log("Called default");
            return state;
    }
};
