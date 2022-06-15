import React, { version } from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import Fonts from "../helpers/Fonts";
import { hp, wp } from "../helpers/Responsiveness";
import Graph from "./Graph";
import ResponsiveText from "./RnText";
 const CardView = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <ResponsiveText>Fabintel Team</ResponsiveText>
        <ResponsiveText >View All</ResponsiveText>

      </View>
      <View style={{ flexDirection: 'row', top: 20 }}>

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
          weight={'bold'} flex={1}
          size={3.5} margin={[0, 0, 0, 5]}>Saniya Tariq</ResponsiveText>

        <View style={styles.timestyle}>
          <ResponsiveText
            color={colors.black}
            size={3.5} margin={[0, 0, 0, 5]}>10:05 AM</ResponsiveText>
        </View>

      </View>
      <ResponsiveText
        size={3.5} color={colors.black} margin={[0, 0, 0, wp(11)]}>React native developer</ResponsiveText>
      <View style={styles.Onlinebadge}>

      </View>
    </View>
  )
}
const NotifationCard = (props) => {
  return (
  <View style={styles.container1}>
  <View style={{ flexDirection: 'row',  }}>
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
      weight={'bold'} flex={1}
      size={3.5} margin={[0, 0, 0, 5]}>Saniya Tariq</ResponsiveText>
  </View>
  <ResponsiveText
    size={3.5} color={colors.grey1} margin={[-20, 0, 0, wp(11)]}>45 minutes ago</ResponsiveText>
</View>
  )}
export{ CardView,NotifationCard}
const styles = StyleSheet.create({
  Onlinebadge: {
    height: 9, width: 9, backgroundColor: colors.lightgreen, position: 'absolute', marginTop: hp(11), marginLeft: wp(12.5), borderRadius: 10
  },
  timestyle: {
    backgroundColor: colors.green10,
    borderRadius: 5,
    justifyContent: 'center',
    height: hp(3.5), width: wp(22)
   , borderWidth: 1.5,
    borderColor: colors.green11
  },
  container: {
    elevation: 9,
    shadowColor: colors.green,
    shadowOpacity: 0.2,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: colors.white,
    marginHorizontal: 15,
    borderRadius: 10
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
    borderRadius: 10
  },
});
