import axios from "axios";
import { capsuleConstants } from "../constants/capsules";
import { apiPath } from "../store";

// Get All Capsules
export const getCapsules = () => async (dispatch) => {
  try {
    dispatch({
      type: capsuleConstants.ALL_CAPSULES_REQUEST,
    });

    const data = await axios.get(apiPath + "/capsules");

    dispatch({
      type: capsuleConstants.ALL_CAPSULES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: capsuleConstants.ALL_CAPSULES_FAIL,
      payload: error.response.data.error,
    });
  }
};
