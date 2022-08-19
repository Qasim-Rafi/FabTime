import React, { useEffect } from "react";
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { hp, wp } from "../../../helpers/Responsiveness";
import { colors } from "../../../constants/colorsPallet";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveText from "../../../components/RnText";
import Input from "../../../components/Input";
import { globalPath } from "../../../constants/globalPath";
import RnButton from "../../../components/RnButton";
import Api from "../../../redux/lib/api";
import urls from "../../../redux/lib/urls";
import Fonts from "../../../helpers/Fonts";
import Loader from "../../../components/loader";
import Icon from "../../../components/Icon";
import { SafeAreaView } from "react-native-safe-area-context";
import { _toast } from "../../../constants/Index";
import { routeName } from "../../../constants/routeName";
const ForgotPassword = ({ navigation }) => {
  const loading = useSelector(
    (state) => state.userReducers.loginScreen.refreshing
  );
  const [errorString, setErrorString] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [data, setData] = React.useState([]);

  const SUBMIT = async () => {
    try {
      const res = await Api.get(urls.FORGOT_PASSWORD+userName.toLocaleLowerCase());
      console.log("get FORGOT_PASSWORD", res);
      if (res && res.success == true) {
      navigation.navigate(routeName.VERIFICATION_CODE)
        _toast(res.message)
      } else {
        _toast(res.message)
      }
    } catch (error) {}
  };

  const Validation = (item) => {
    setErrorString("");
    if (userName === "") {
      setErrorString("Email or Phone Number is required");
    } else {
      SUBMIT();
      setErrorString("");
    }
  };
  return (
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
      >
        <SafeAreaView edges={["top", "left", "right"]}>
          <View style={styles.screeninfo}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  size={18}
                  margin={[5, 0, 0, 0]}
                  source={globalPath.backArrow}
                />
              </TouchableOpacity>
            <Image style={styles.logo} source={globalPath.logo} />
          </View>
          <View style={{ backgroundColor: colors.blue1, flex: 1 }}>
            <View style={styles.footer}>
              <ResponsiveText
                fontFamily={Fonts.Bold}
                size={6.5}
                color={colors.blue1}
              >
                Forgot Password
              </ResponsiveText>
              <ResponsiveText
                fontFamily={Fonts.Bold}
                size={3.5}
                color={colors.grey1}
              >
                Enter your phone number or Email address.
              </ResponsiveText>
              <View style={{ marginTop: hp(3), alignItems: "center" }}>
                <Input
                  placeholder={"Email or phone number"}
                  width={wp(90)}
                  height={hp(6.5)}
                  padding={[0, 0, 0, 25]}
                  margin={[20, 0, 5, 0]}
                  onChnageText={(text) => setUserName(text)}
                  leftIcon={globalPath.Email}
                  value={userName.toLocaleLowerCase()}
                />

                {errorString ? (
                  <ResponsiveText color={colors.red} margin={[20, 0, 0, 10]}>
                    {errorString}
                  </ResponsiveText>
                ) : null}
                <RnButton
                  backgroundColor={colors.blue1}
                  margin={[50, 0, 0, 0]}
                  title={"FORGOT PASSWORD"}
                  onPress={() => Validation()}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
        {loading ? <Loader /> : undefined}
      </ImageBackground>
  );
};
export default ForgotPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: wp(5),
    paddingTop: wp(5),
    borderTopRightRadius: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.blue1
  },
  screeninfo: {
    flex: 0.33,
    backgroundColor: colors.blue1,
    borderBottomLeftRadius: 35,
    paddingHorizontal:wp(5),
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    alignSelf: "center",
  },
});
