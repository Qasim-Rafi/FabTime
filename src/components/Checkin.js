import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../constants/colorsPallet";
import { wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";
const Checkin = (props) => {
  return (
    <TouchableOpacity  onPress={props.onPress}
      style={{
        // padding: wp(25),
        // paddingVertical: wp(25),
        height:wp(60),
        width:wp(60),

        borderRadius: wp(30),
        shadowOffset: { width: 10, height: 12 },
        shadowColor: colors.blue1,
        shadowOpacity: 1,
        elevation: 24,
        backgroundColor: colors.white,
        // borderWidth:0.4,
        borderColor: colors.blue1,
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <View style={{ maxWidth: wp(20) }}>
        <ResponsiveText size={4}>CHECH IN</ResponsiveText>
      </View>
    </TouchableOpacity>
  );
};

export default Checkin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

// rnfes
