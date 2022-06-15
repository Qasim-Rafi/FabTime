import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import ResponsiveText from "../../components/RnText";
import { CardView, NotifationCard } from "../../components/cardView";
import TabIcon from "../../components/TabIcon";
import { globalPath } from "../../constants/globalPath";
import { colors } from "../../constants/colorsPallet";

const Notification = () => {
  return (
    <Layout title={"Fabintel Team"}>
<NotifationCard/>
    </Layout>
  );
};

export default Notification;

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
