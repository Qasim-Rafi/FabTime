
import types from "./types";
//LOGIN
export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data: data,
  };
}

export const getpresentTeam = (data) => {
  return {
    type: types.PRESENT_TEAM_REQUEST,
    data: data,
  };
}