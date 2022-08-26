import axios from "axios";
import {
    GET_ADMIN_DATA_REQUEST,
    GET_ADMIN_DATA_SUCCESS,
    GET_ADMIN_DATA_FAIL,
} from "../constants/adminConstant";

export const getAdminData = () => async (dispatch, getState) => {
    // console.log(
    //     "constants",
    //     !GET_ADMIN_DATA_REQUEST,
    //     !GET_ADMIN_DATA_SUCCESS,
    //     !GET_ADMIN_DATA_FAIL
    // );
    try {
        dispatch({ type: GET_ADMIN_DATA_REQUEST });
        // const { data } = await axios.get("https://reqres.in/api/users?page=2");
        const { data } = await axios.get("https://reqres.in/api/users?delay=3");
        // console.log(data.data);
        // if (data && data.length !== 0) {
        dispatch({ type: GET_ADMIN_DATA_SUCCESS, payload: data.data });
        // }
    } catch (error) {
        dispatch({ type: GET_ADMIN_DATA_FAIL, payload: error });
    }
};
