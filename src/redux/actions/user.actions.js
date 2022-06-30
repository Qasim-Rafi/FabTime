import moment from 'moment';
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
//GET USER PROFILE
export const getUserProfile = (data) => {
  return {
    type: types.GET_USER_PROFILE_REQUEST,
    data: data,
  };
};
//get user attendance record
export const getUserAttendanceRecord = (data) => {
  return {
    type: types.GET_MOTHLY_ATTENDANCE_OF_USER_REQUEST,
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
//GetAttendenceCountsAll
export const getAttendenceCount = (data) => {
  return {
    type: types.GET_ATDNCE_COUNTSALL_REQUEST,
    data: data,
  };
};
//get late user
export const getLateUser = (data) => {
  return {
    type: types.GET_LATE_USER_REQUEST,
    data: data,
  };
};
export const formatAMPM = (date1,type) => {
  // console.log('date1', date1)
  var date = new Date(date1);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // var strTime = hours + ":" + minutes + " " + ampm;
  //Wed 29-Jun-2022 15:44
  var strTime =date1==''?'':  moment(date1,'DD-MM-YYYY HH:mm:ss A').format('LT');
  var endTime =date1==''?'': moment(date1,'ddd DD-MMM-YYYY hh:mm').format('LT');

  return type=='type2'?endTime: strTime;
};
