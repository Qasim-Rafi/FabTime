import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colorsPallet";
import ResponsiveText from "../components/RnText";
import { hp, wp } from "../helpers/Responsiveness";
import Card from "./Card";
const LeavesCard = (props) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <ResponsiveText size={4} color={colors.blue2}>
          {props.reason}
        </ResponsiveText>
        <View
          style={[
            styles.Boxstyle,
            {
              backgroundColor:
                props.status == false
                  ? colors.red4
                  : props.status == true
                  ? colors.red
                  : colors.green,
            },
            {
              borderColor:
                props.status == false
                  ? colors.red4
                  : props.status == true
                  ? colors.green10
                  : colors.yellow1,
            },
          ]}
        >
          <ResponsiveText size={3} color={colors.white}>
            {props.status == true
              ? "Accept"
              : props.status == false
              ? "Reject"
              : "pending"}
          </ResponsiveText>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <ResponsiveText size={3} color={colors.black}>
          {props.date}
        </ResponsiveText>
        <ResponsiveText size={2.5} color={colors.grey1}>
          {props.description}
        </ResponsiveText>
      </View>
    </Card>
  );
};
export default LeavesCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Boxstyle: {
    backgroundColor: colors.green11,
    // borderWidth: 1.2,
    borderColor: colors.green2,
    borderRadius: 7,
    width: wp(16),
    alignItems: "center",
    justifyContent:'center',
    height: hp(2.5),
  },
});
