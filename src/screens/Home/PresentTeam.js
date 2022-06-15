import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import ResponsiveText from "../../components/RnText";
import { CardView } from "../../components/cardView";
import TabIcon from "../../components/TabIcon";
import { globalPath } from "../../constants/globalPath";
import { colors } from "../../constants/colorsPallet";

const PresentTeam = () => {
  return (
    <Layout title={"Fabintel Team"}>
      <View style={styles.tabContainer}>

        <TabIcon
          title="Present"
          CircleText={'10'}
          CircleColor={colors.green}
          titleSize={3.4}
        />
        <TabIcon
          title="Absent"
          titleSize={3.4}
          CircleText={'30'}
          CircleColor={colors.red}

        />
        <TabIcon
          title="Late"
          titleSize={3.4}
          CircleText={'27'}
          CircleColor={colors.blue1}

        />
        <TabIcon
          title="Leave"
          titleSize={3.4}
          CircleText={'9'}
          CircleColor={colors.yellow3}
        />
      </View>
      <CardView />
    </Layout>
  );
};

export default PresentTeam;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    padding: 5,
    margin: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },

  },
});
