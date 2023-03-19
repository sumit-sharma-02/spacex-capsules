import axios from "axios";
import { capsuleConstants } from "../constants/capsules";
import { apiPath } from "../store";

// Get All Capsules
export const getCapsules =
  (currentPage = 1, capsulesPerPage = 6) =>
  async (dispatch) => {
    try {
      dispatch({
        type: capsuleConstants.ALL_CAPSULES_REQUEST,
      });

      const capsules = await axios.get(apiPath + "/capsules");

      const totalCapsulesPages = Math.ceil(
        capsules.data.length / capsulesPerPage
      );
      const pages = [...Array(totalCapsulesPages + 1).keys()].slice(1);
      const indexOfLastPage = currentPage * capsulesPerPage;
      const indexOfFirstPage = indexOfLastPage - capsulesPerPage;
      const paginatedCapsules = capsules.data.slice(
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
        payload: error,
      });
    }
  };
