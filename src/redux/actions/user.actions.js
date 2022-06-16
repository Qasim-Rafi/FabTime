import types from "./types";
//LOGIN
export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data: data,
  };
};
//get present team
export const getpresentTeam = (data) => {
  return {
    type: types.PRESENT_TEAM_REQUEST,
    data: data,
  };
}
//get leaves
  export const getLeavesRequest = (data) => {
    return {
      type: types.GET_LEAVES_REQUEST,
      data: data,
    };
};
//get request data
export const getRequestList = (data) => {
  return {
    type: types.GET_REQUEST,
    data: data,
  };
};
<<<<<<< Updated upstream
=======
//GetAttendenceCountsAll
export const getAttendenceCount = (data) => {
  return {
    type: types.GET_ATDNCE_COUNTSALL_REQUEST,
    data: data,
  };
};

>>>>>>> Stashed changes
export const formatAMPM = (date1) => {
  var date = new Date(date1);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
