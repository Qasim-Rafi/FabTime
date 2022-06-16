import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { hp, wp } from "../../../helpers/Responsiveness";
import { colors } from "../../../constants/colorsPallet";
import { loginUser } from "../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveText from "../../../components/RnText";
import DropDown from "../../../components/DropDown";
import Input from "../../../components/Input";
import { globalPath } from "../../../constants/globalPath";
import RnButton from "../../../components/RnButton";
import Api from "../../../redux/lib/api";
import urls from "../../../redux/lib/urls";
import Fonts from "../../../helpers/Fonts";
import { routeName } from "../../../constants/routeName";
import { Grid } from "react-native-animated-spinkit";
const Login = ({ navigation }) => {
  const loading = useSelector(
    (state) => state.userReducers.loginScreen.refreshing
  );
  const loginResponse = useSelector(
    (state) => state.userReducers.loginScreen.data
  );
  const loginNetworkErr = useSelector(
    (state) => state.userReducers.loginScreen.errorMsg
  );
  const [errorString, setErrorString] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [data, setData] = React.useState([]);
  //Redux Action Called
  const dispatch = useDispatch();
  const userLogin = () => {
    dispatch(
      loginUser({
        params: {
          username: userName,
          password: password,
          // schoolName1: data.find((item) => item.branchName == school)?.id,
          userType:2
        },
        navigation: navigation,
      })
    );
  };

  useEffect(() => {
    getCompanies();
  }, []);
  useEffect(() => {
    loginResponse ? setErrorString(loginResponse.message) : null;
    loginNetworkErr ? setErrorString(loginNetworkErr.message) : null;
  }, [loginResponse, loginNetworkErr]);

  // console.log(loginResponse, "LOgin screen error");
  // console.log(loginNetworkErr, "LOgin network error");

  const getCompanies = async () => {
    try {
      const res = await Api.get(urls.GET_ALL_COMPANIES);
      // console.log("get compsnies", res);
      if (res && res.success == true) {
      } else {
      }
    } catch (error) {}
  };

  const Validation = (item) => {
    // setErrorString("Please Enter Username and
    // navigation.replace(routeName.BOTTOM_TABS);

    // setErrorString("Please Enter Username and Password to proceed");
    setErrorString("");
    if (userName === "" && password === "" ) {
      setErrorString("All fields are required");
    } else if (userName === "" || userName === null) {
      setErrorString("Username is missing");
    } else if (password === "") {
      setErrorString("Password is missing");
    }
    //  else if (company === "") {
    //   setErrorString("Please select school");
    // } 
    else {
      // console.log("ErrorMessage:yhyuu ");
      userLogin();
      setErrorString("");
    }
  };
  return (
    <View style={styles.container}>
      
      <ImageBackground
        // source={globalPath.background}
        resizeMode="cover"
        style={styles.image}
      >
        
        <View style={{ marginHorizontal: wp(0) }}>
          <View style={styles.screeninfo}>
            <Image style={styles.logo} source={globalPath.logo} />
          </View>
          <View style={{ backgroundColor: colors.blue1, flex: 1 }}>
            <View style={styles.footer}>
              <ResponsiveText
                margin={[20, 0, 0, 30]}
                fontFamily={Fonts.Bold}
                size={8}
                color={colors.blue1}
              >
                Sign In
              </ResponsiveText>
              <ResponsiveText
                margin={[0, 0, 0, 30]}
                fontFamily={Fonts.Bold}
                size={3.5}
                color={colors.grey1}
              >
                Enter your phone number or Email address for sign in.
              </ResponsiveText>
              <View style={{ marginTop: hp(5), marginHorizontal: wp(5) }}>
                <DropDown
                  data={data.map((v)=>v.name)}
                  defaultButtonText={"Select Your company"}
                  leftIcon={globalPath.arrow}
                  ren

                  // onSelect={(item) => {
                  //   console.log("school", item);
                  //   setSchool(item);
                />

                <Input
                  placeholder={"Email or phone number"}
                  width={wp(90)}
                  height={hp(6.5)}
                  padding={[0, 0, 0, 25]}
                  margin={[20, 0, 5, 0]}
                  onChnageText={(text) => setUserName(text)}
                  leftIcon={globalPath.Email}
                />

                <Input
                  placeholder={"Password"}
                  width={wp(90)}
                  height={hp(6.5)}
                  padding={[0, 0, 0, 25]}
                  margin={[20, 0, 5, 0]}
                  // secureTextEntry
                  onChnageText={(text) => setPassword(text)}
                  leftIcon={globalPath.Lock}
                />
                <ResponsiveText color={colors.red} margin={[20, 0, 0, 10]}>{errorString}</ResponsiveText>
                <RnButton
                  backgroundColor={colors.blue1}
                  margin={[50, 0, 0, 0]}
                  title={"Sign in"}
                  onPress={() => Validation()}
                />
              
              </View>
                
            </View>
         
          </View>
         
        </View>
        {loading?
                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    alignItems:"center",
                    justifyContent:'center',
                    right: 0,
                    backgroundColor: 'rgba(65, 65, 65, 0.5)',
                    flex: 1,
                  }}>
                   <  Grid count={5} color={colors.blue1} size={40} />
                 </View>
                   :
                   undefined
                }
      </ImageBackground>
    
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.grey,
    // borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // alignItems: 'center'
    // marginTop:hp(0.5)
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screeninfo: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue1,
    borderBottomLeftRadius: 35,
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    // marginBottom: 20,
    alignItems: "center",
  },
});
