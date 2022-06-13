import React, { version } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import ActivityRings from "react-native-activity-rings";  
import ResponsiveText from "./RnText";
import { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
import { globalPath } from "../constants/globalPath";
import Graph from "./Graph";
const CardView = (props) => {
  return(
    <View style={styles.container}>
    <Graph/>
  </View>
  )
}
export default CardView;
const styles = StyleSheet.create({
  container: {
    elevation: 9,
    shadowColor: colors.black,
    shadowOpacity: 1,
    padding:20,
    shadowOffset: {
      width: 90,
      height: 100,
    },
    backgroundColor: colors.white,
    top: -10,
    marginHorizontal: 20,
    borderRadius: 10
  },
});
