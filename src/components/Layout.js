import React, { useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Fonts from "../helpers/Fonts";
import { colors } from "../constants/colorsPallet";
import { hp, wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";
import { globalPath } from "../constants/globalPath";
import { isImage } from "../constants/Index";

const Layout = (props) => {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <View style={styles.screeninfo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            <ResponsiveText
              fontFamily={Fonts.Bold}
              size={props.titleSize ? props.titleSize : 6}
              color={colors.white}
            >
              {props.title}
            </ResponsiveText>
            <TouchableOpacity
              disabled={!props.disabled ? props.disabled : true}
              onPress={props.onPress}
            >
              <Image
                source={props.source}
                style={{
                  height: wp(7),
                  width: wp(18),
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>

          {props.address ? (
            <ResponsiveText
              margin={[0, 0, 0, 30]}
              fontFamily={Fonts.Bold}
              size={3.5}
              color={colors.white}
            >
              {/* {props.address} */}
              fabintel international lahore, pakistan
            </ResponsiveText>
          ) : null}
          {props.profile ? (
            <View>
              <View
                style={{
                  alignItems: "flex-end",
                  alignSelf: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={
                    isImage(props.userimg)
                      ? { uri: props.userimg }
                      : globalPath.user
                  }
                  style={{
                    borderRadius: 70,
                    height: wp(30),
                    width: wp(30),
                    resizeMode: "contain",
                    backgroundColor:colors.white
                  }}
                />
                {/* <View style={styles.Onlinebadge}></View> */}
              </View>
              <ResponsiveText
                margin={[8, 0, 0, 14]}
                weight={"bold"}
                fontFamily={Fonts.Bold}
                size={3.7}
                color={colors.white}
                textAlign={"center"}
              >
                {props.username}
              </ResponsiveText>
              <ResponsiveText
                margin={[5, 0, 5, 0]}
                fontFamily={Fonts.Bold}
                size={3.5}
                textAlign={"center"}
                color={colors.white}
              >
                {props.Field}
              </ResponsiveText>
            </View>
          ) : null}
        </View>
        <View style={{ backgroundColor: colors.blue1, flex: 1 }}>
          <View style={styles.footer}>{props.children}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    padding: 10,
    // justifyContent:'center',
    // alignItems: "center",
    // paddingTop: "25%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screeninfo: {
    // flex: 0.4,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.blue1,
    borderBottomLeftRadius: 35,
    paddingBottom: 10,
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    // marginBottom: 20,
    alignItems: "center",
  },
  Onlinebadge: {
    height: 15,
    width: 15,
    backgroundColor: colors.lightgreen,
    position: "absolute",
    borderRadius: 10,
    bottom: 20,
    right:10
  },
});
