import React, { version } from "react";
import { StyleSheet, View, Image,TouchableOpacity } from "react-native";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";
import moment from 'moment'
const CheckinBox = (props) => {
  return (
    <TouchableOpacity disabled={!props.disabled?props.disabled:true} style={styles.container1} onPress={props.onPress}>

      <ResponsiveText
        color={props.titleColor}
        weight={"bold"}
        size={3.8}
      
      > 
       {moment(new Date(props.title)).format(" MMMM Do YYYY") }
        
      </ResponsiveText>

      <ResponsiveText
        color={props.subTitlecolor}
        weight={"bold"}
        size={3.8}
      >
        {props.subTitle}
      </ResponsiveText>

    </TouchableOpacity>
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
