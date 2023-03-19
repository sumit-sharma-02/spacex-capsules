import axios from "axios";
import { capsuleConstants } from "../constants/capsules";
import { apiPath } from "../store";

// Get All Capsules
export const getCapsules =
  (
    currentPage = 1,
    capsulesPerPage = 6,
    capsuleStatus = "",
    capsuleType = "",
    capsuleLaunchDate = ""
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: capsuleConstants.ALL_CAPSULES_REQUEST,
      });

      const capsules = await axios.get(apiPath + "/capsules");
      const filteredCapsules = capsules.data.filter((capsule) => {
        return (
          (capsule.status === capsuleStatus || capsuleStatus === "") &&
          (capsule.type === capsuleType || capsuleType === "") &&
          (capsuleLaunchDate === "" ||
            capsule.original_launch?.includes(capsuleLaunchDate))
        );
      });

      const totalCapsulesPages = Math.ceil(
        filteredCapsules.length / capsulesPerPage
      );

      const pages = [...Array(totalCapsulesPages + 1).keys()].slice(1);
      const indexOfLastPage = currentPage * capsulesPerPage;
      const indexOfFirstPage = indexOfLastPage - capsulesPerPage;

      const paginatedCapsules = filteredCapsules.slice(
        indexOfFirstPage,
        indexOfLastPage
      );

      dispatch({
        type: capsuleConstants.ALL_CAPSULES_SUCCESS,
        payload: {
          capsules,
          paginatedCapsules,
          pages,
          totalCapsulesPages,
        },
      });
    } catch (error) {
      dispatch({
        type: capsuleConstants.ALL_CAPSULES_FAIL,
        payload: error.response.data.error,
      });
    }
  };

export const getCapsuleDetails = (capsuleSerial) => async (dispatch) => {
  try {
    dispatch({
      type: capsuleConstants.CAPSULE_DETAILS_REQUEST,
    });

    const capsule = await axios.get(apiPath + `/capsules/${capsuleSerial}`);

    dispatch({
      type: capsuleConstants.CAPSULE_DETAILS_SUCCESS,
      payload: capsule.data,
    });
  } catch (error) {
    dispatch({
      type: capsuleConstants.CAPSULE_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: capsuleConstants.CLEAR_ERRORS,
  });
};
