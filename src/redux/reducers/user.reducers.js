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
<<<<<<< Updated upstream
  getLeaves:{
    refreshing:false,
    data:[]
  },
  getRequestData:{
    refreshing:false,
    data:[]
  }
=======
  getAttendenceCount: {
    refreshing: false,
    data: [],
  },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
//get present team
=======
//presentTeam
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
//get Leaves Data
case types.GET_LEAVES_REQUEST:
      return {
        ...state,
        getLeaves: {
          ...state.getLeaves,
          refreshing: true,
        },
      };

    case types.GET_LEAVES_SUCCESS:
      return {
        ...state,
        getLeaves: {
          ...state.getLeaves,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.GET_LEAVES_FAILURE:
      return {
        ...state,
        getLeaves: {
          ...state.getLeaves,
          refreshing: false,
          // data: action.payload,
          errorMsg: action.error,
        },
      };
      //Get request data
      case types.GET_REQUEST:
      return {
        ...state,
        getRequestData: {
          ...state.getRequestData,
          refreshing: true,
        },
      };

    case types.GET_SUCCESS:
      return {
        ...state,
        getRequestData: {
          ...state.getRequestData,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.GET_FAILURE:
      return {
        ...state,
        getRequestData: {
          ...state.getRequestData,
          refreshing: false,
          // data: action.payload,
          errorMsg: action.error,
        },
      };
=======
//GetAttendenceCountsAll
case types.GET_ATDNCE_COUNTSALL_REQUEST:
  return {
    ...state,
    getAttendenceCount: {
      ...state.getAttendenceCount,
      refreshing: true,
    },
  };

case types.GET_ATDNCE_COUNTSALL_SUCCESS:
  return {
    ...state,
    getAttendenceCount: {
      ...state.getAttendenceCount,
      data: action.payload,
      refreshing: false,
    },
  };
case types.GET_ATDNCE_COUNTSALL_FAILURE:
  return {
    ...state,
    getAttendenceCount: {
      ...state.getAttendenceCount,
      refreshing: false,
      // data: action.payload,
      errorMsg: action.error,
    },
  };
>>>>>>> Stashed changes
    default:
      return state;
  }
};
