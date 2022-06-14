import React, { version } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../constants/colorsPallet";
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
    elevation: 1,
    shadowColor: colors.blue1,
    shadowOpacity: 0.2,
    padding:20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: colors.white,
    top: -20,
    marginHorizontal: 15,
    borderRadius: 10
  },
});
