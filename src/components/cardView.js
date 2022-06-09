import React, { version } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import ResponsiveText from "./RnText";
import { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
const CardView = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon borderRadius={10} size={50} source={require('../assets/fake_Images/femaleuser.jpeg')} />
      </TouchableOpacity>
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <ResponsiveText size={3} color={colors.green}>
          {props.name}
        </ResponsiveText>
        <ResponsiveText color={colors.black} size={2.5}>
          {props.surname}
        </ResponsiveText>
        <ResponsiveText color={colors.black} size={2.4}>
          {props.mail}
        </ResponsiveText>
      </View>
    </View>
  );
};
export default CardView;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 1,
    margin: 5,
    padding: wp(2),
    backgroundColor: colors.white,
    borderRadius: wp(2),
  },
  imageView: {
    height: hp(10),
    width: wp(12),
    resizeMode: "contain",
    borderRadius: 5,
  },
  name: {
    fontSize: hp(1.3),
    color: colors.green,
  },
});
