import React, { version } from "react";
import { StyleSheet, View, Image } from "react-native";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";
const CheckinBox = (props) => {
  return (
    <View style={styles.container1}>

      <ResponsiveText
        color={props.titleColor}
        weight={"bold"}
        size={3.8}
      > 
        {props.title}
      </ResponsiveText>

      <ResponsiveText
        color={props.subTitlecolor}
        weight={"bold"}
        size={3.5}
      >
        {props.subTitle}
      </ResponsiveText>

    </View>
  );
};
export { CheckinBox };
const styles = StyleSheet.create({

  container1: {
    elevation: 9,
    shadowColor: colors.green,
    shadowOpacity: 0.2,
    height:hp(9),
    // width:wp(40),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: colors.white,
    // marginHorizontal: 40,
    borderRadius: 10,
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5
    



  },
});
