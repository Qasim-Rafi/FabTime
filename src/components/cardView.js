import React, { version } from "react";
import { StyleSheet, View, Image } from "react-native";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";
const CardView = (props) => {
  return (
      <View style={{ flexDirection: "row", alignItems:'center',padding:10 }}>
        <View style={{ alignItems: "flex-end" }}>
          <Image
            source={globalPath.background}
            style={{
              borderRadius: 20,
              height: wp(10),
              width: wp(10),
              resizeMode: "contain",
            }}
          />
          <View style={styles.Onlinebadge}></View>
        </View>
        <View style={{flex:1,paddingHorizontal:10}}>
          <ResponsiveText
            color={colors.black}
            weight={"bold"}
            flex={1}
            size={3.5}
            // margin={[0, 0, 0, 5]}
          >
            Saniya Tariq
          </ResponsiveText>
          <ResponsiveText
            size={3.2}
            color={colors.black}
            // margin={[0, 0, 0, 5]}
          >
            React native developer
          </ResponsiveText>
        </View>

        <View style={styles.timestyle}>
          <ResponsiveText color={colors.black} size={2.8} >
            10:05 AM
          </ResponsiveText>
        </View>
      </View>
  );
};
const NotifationCard = (props) => {
  return (
    <View style={styles.container1}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={globalPath.background}
          style={{
            borderRadius: 20,
            height: hp(5),
            width: wp(10),
            resizeMode: "contain",
          }}
        />
        <ResponsiveText
          color={colors.black}
          weight={"bold"}
          flex={1}
          size={3.5}
          margin={[0, 0, 0, 5]}
        >
          Saniya Tariq
        </ResponsiveText>
      </View>
      <ResponsiveText
        size={3.5}
        color={colors.grey1}
        margin={[-20, 0, 0, wp(11)]}
      >
        45 minutes ago
      </ResponsiveText>
    </View>
  );
};
export { CardView, NotifationCard };
const styles = StyleSheet.create({
  Onlinebadge: {
    height: 9,
    width: 9,
    backgroundColor: colors.lightgreen,
    position: "absolute",
    borderRadius: 10,
    bottom: 10,
  },
  timestyle: {
    backgroundColor: colors.green10,
    borderRadius: 5,
    justifyContent: "center",
    height: 25,
    paddingHorizontal: 8,
    // width: wp(22),
    borderWidth: 1.5,
    borderColor: colors.green11,
  },
  container: {
    // elevation: 9,
    // shadowColor: colors.green,
    // shadowOpacity: 0.2,
    // padding: 20,
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // backgroundColor: colors.white,
    // marginHorizontal: 15,
    // borderRadius: 10
  },
  container1: {
    elevation: 9,
    shadowColor: colors.green,
    shadowOpacity: 0.2,
    padding: 25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: colors.white,
    marginHorizontal: 15,
    borderRadius: 10,
  },
});
