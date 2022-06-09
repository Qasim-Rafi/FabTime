import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
} from "react-native";
import { hp, wp } from "../../../helpers/Responsiveness";
import { colors } from "../../../constants/colorsPallet";
import { loginUser } from "../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveText from "../../../components/RnText";
import Api from "../../../redux/lib/api";
import urls from "../../../redux/lib/urls";
const Login = ({ navigation }) => {
  const loading = useSelector(
    (state) => state.login_User.loginScreen.refreshing
  );
  const loginResponse = useSelector(
    (state) => state.login_User.loginScreen.data
  );
  const loginNetworkErr = useSelector(
    (state) => state.login_User.loginScreen.errorMsg
  );
  const [errorString, setErrorString] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [school, setSchool] = React.useState("");

  const [data, setData] = React.useState([]);

  //Redux Action Called
  const dispatch = useDispatch();
  const userLogin = () => {
    dispatch(
      loginUser({
        params: {
          username: userName,
          password: password,
          schoolName1: data.find((item) => item.branchName == school)?.id,
        },
        navigation: navigation,
      })
    );
  };

  useEffect(() => {
    getSchool();
  }, []);
  useEffect(() => {
    loginResponse ? setErrorString(loginResponse.message) : null;
    loginNetworkErr ? setErrorString(loginNetworkErr.message) : null;
  }, [loginResponse, loginNetworkErr]);

  console.log(loginResponse, "LOgin screen error");
  console.log(loginNetworkErr, "LOgin network error");

  const getSchool = async () => {
    try {
      const res = await Api.get(urls.GET_SchoolBranches);
      console.log("get schools", res);
      if (res && res.success == true) {
        setData(res.data);
      } else {
      }
    } catch (error) {}
  };

  // const Validation = (item) => {
  //   // setErrorString("Please Enter Username and 
  // };
  return (
    <View style={styles.container}>
      <ResponsiveText>LOGIN PAGE</ResponsiveText>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    alignSelf:"center",
    flex: 1,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    marginBottom: 20,
  },
  poweredLogo: {
    height: hp(15),
    width: wp(15),
    resizeMode: "contain",
  },
  screeninfo: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMsg: {
    fontSize: 10,
    color: colors.red,
    alignSelf: "center",
    marginTop: hp(4),
    padding: hp(1),
  },
  signin: {
    backgroundColor: colors.yellow,
    width: wp(80),
    height: hp(6),
    borderRadius: 7,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
