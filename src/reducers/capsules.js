import { capsuleConstants } from "../constants/capsules";

export const capsulesReducer = (state = { capsules: [] }, action) => {
  switch (action.type) {
    case capsuleConstants.ALL_CAPSULES_REQUEST:
      return {
        loading: true,
        capsules: [],
      };

    case capsuleConstants.ALL_CAPSULES_SUCCESS:
      return {
        loading: false,
        capsules: action.payload.data,
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
