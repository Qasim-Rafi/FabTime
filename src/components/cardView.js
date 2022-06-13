import React, { version } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import {
  ProgressChart,
} from "react-native-chart-kit";
import ResponsiveText from "./RnText";
import { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
import { globalPath } from "../constants/globalPath";
const CardView = (props) => {
  const data = {
    labels: ["present", "Absent", "Leave","late"], // optional
    data: [0.4, 0.6, 0.8,0.23]
  };
  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={wp(90)}
        height={220}
        chartConfig={{
          backgroundColor: colors.white,
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          fillShadowGradient: colors.pink,
          fillShadowGradientFrom: colors.pink,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(19, 69, 148, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 18,
          borderRadius: 16,
        }}
      />


      {/* <View style={{margin:10}}>

      <View style={{ flexDirection: "row",alignItems:'center' }}>
        <View style={{ backgroundColor: colors.green, height: 20, width: 20, borderRadius: 10, }}></View>
        <ResponsiveText flex={1} margin={[0, 0, 0, wp(3)]}>Present</ResponsiveText>
      </View>
      <ResponsiveText weight={'bold'} color={colors.black} size={7} margin={[0, 0, 0, wp(7)]}>50%</ResponsiveText>
      <View style={{ flexDirection: "row",alignItems:'center' }}>
        <View style={{ backgroundColor: colors.red, height: 20, width: 20, borderRadius: 10, }}></View>
        <ResponsiveText flex={1} margin={[0, 0, 0, wp(3)]}>Absent</ResponsiveText>
      </View>
      <ResponsiveText weight={'bold'} color={colors.black} size={7} margin={[0, 0, 0, wp(7)]}>10%</ResponsiveText>
      <View style={{ flexDirection: "row",alignItems:'center' }}>
        <View style={{ backgroundColor: colors.blue1, height: 20, width: 20, borderRadius: 10, }}></View>
        <ResponsiveText flex={1} margin={[0, 0, 0, wp(3)]}>Late</ResponsiveText>
      </View>
      <ResponsiveText  weight={'bold'} color={colors.black} size={7} margin={[0, 0, 0, wp(7)]}>21%</ResponsiveText>
      <View style={{ flexDirection: "row",alignItems:'center' }}>
        <View style={{ backgroundColor: colors.yellow1, height: 20, width: 20, borderRadius: 10, }}></View>
        <ResponsiveText flex={1} margin={[0, 0, 0, wp(3)]}>Leaves</ResponsiveText>
      </View>
      <ResponsiveText weight={'bold'} color={colors.black} size={7} margin={[0, 0, 0, wp(7)]}>19%</ResponsiveText>
      </View> */}


    </View>
  );
};
export default CardView;
const styles = StyleSheet.create({
  container: {
    elevation: 9,
    shadowColor: colors.black,
    shadowOpacity: 1,
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
