import { capsuleConstants } from "../constants/capsules";

export const capsulesReducer = (
  state = { capsules: [], pages: [], totalPages: 1 },
  action
) => {
  switch (action.type) {
    case capsuleConstants.ALL_CAPSULES_REQUEST:
      return {
        loading: true,
        capsules: [],
      };

    case capsuleConstants.ALL_CAPSULES_SUCCESS:
      return {
        loading: false,
        capsules: action.payload.paginatedCapsules,
        pages: action.payload.pages,
        totalPages: action.payload.totalCapsulesPages,
      };

    case capsuleConstants.ALL_CAPSULES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case capsuleConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
