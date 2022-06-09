import AsyncStorage from "@react-native-community/async-storage";
import { takeLatest, put, select } from "redux-saga/effects";
import { routeName } from "../../constants/routeName";
// import { parseCats } from "../../helpers/cat.helpers";
import types from "../actions/types";
import Api from "../lib/api";
import urls from "../lib/urls";
import { StackActions } from "@react-navigation/native";
//LOGIN
export function* loginUserSaga() {
  console.log("saga function Works");
  yield takeLatest(types.LOGIN_USER_REQUEST, loginUserApi);
}
function* loginUserApi(data, response) {
  console.log(data, "action in saga");
  let { params, navigation } = data.data;
  try {
    const response = yield Api.post(urls.LOGIN, params);
    console.log(response, "response");
    if (response && response.data != null) {
      yield AsyncStorage.setItem("@token", response.data.token);
      yield AsyncStorage.setItem("@role", response.data.role);
      yield AsyncStorage.setItem("@userId", response.data.loggedInUserId);
      yield AsyncStorage.setItem("@schoolName", response.data.schoolName);
      yield AsyncStorage.setItem("@userName", response.data.loggedInUserName);
      yield put({ type: types.LOGIN_USER_SUCCESS, payload: response });
      if (response.data.role == "Admin") {
        navigation.dispatch(StackActions.replace(routeName.LANDING_SCREEN));
      } else if (response.data.role == "Student") {
        navigation.dispatch(StackActions.replace(routeName.STUDENT_DASHBOARD));
      }else if(response.data.role == "Teacher"){
        navigation.dispatch(StackActions.replace(routeName.TEACHER_DASHBOARD));
      }else if(response.data.role == "Parent"){
        navigation.dispatch(StackActions.replace(routeName.PARENTS));
      }
    } else {
      yield put({ type: types.LOGIN_USER_FAILURE, payload: response });
    }
  } catch (error) {
    console.log('error',error);
    yield put({ type: types.LOGIN_USER_FAILURE, error: error });

    yield put({ type: types.LOGIN_USER_FAILURE, error: error });
  }
}