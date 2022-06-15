import types from "../actions/types";

//Get site data from url reducer
const initialState = {
  status: null,
  message: null,
  error: false,
  loginScreen: {
    refreshing: false,
    data: {
      loggedInUserId: null,
      loggedInUserName: "",
      loggedInUserTypeId: "",
      message: null,
    },
  },
  presentTeam: {
    refreshing: false,
    data: [],
  },
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
      console.log(action, "action in reducer");
      return {
        ...state,
        loginScreen: {
          ...state.loginScreen,
          refreshing: true,
        },
      };

    case types.LOGIN_USER_SUCCESS:
      console.log(action, "action in reducer");
      return {
        ...state,
        loginScreen: {
          ...state.loginScreen,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.LOGIN_USER_FAILURE:
      console.log(action, "action in reducer");
      return {
        ...state,
        loginScreen: {
          ...state.loginScreen,
          refreshing: false,
          data: action.payload,
          errorMsg: action.error,
        },
      };

    case types.PRESENT_TEAM_REQUEST:
      return {
        ...state,
        presentTeam: {
          ...state.presentTeam,
          refreshing: true,
        },
      };

    case types.PRESENT_TEAM_SUCCESS:
      return {
        ...state,
        presentTeam: {
          ...state.presentTeam,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.PRESENT_TEAM_FAILURE:
      return {
        ...state,
        presentTeam: {
          ...state.presentTeam,
          refreshing: false,
          // data: action.payload,
          errorMsg: action.error,
        },
      };

    default:
      return state;
  }
};
