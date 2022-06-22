import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { CardView } from "../../components/cardView";
import TabIcon from "../../components/TabIcon";
import { colors } from "../../constants/colorsPallet";
import { ScrollView } from "react-native-gesture-handler";
import { formatAMPM } from "../../redux/actions/user.actions";
import { hp } from "../../helpers/Responsiveness";
import RecordNotFound from "../../components/RecordnotFound";

const PresentTeam = ({ navigation, route }) => {
  const [data, setData] = useState(route.params);
  console.log(formatAMPM("Thu 16-Jun-2022 16:00"));

  return (
    <Layout title={"Fabintel Team"}>
      <ScrollView>
        {data?.length > 0
          ? data.map((item, index) => (
              <CardView
                title={item.name}
                userDesignation={item.userDesignation}
                checkInTime={item.createdDateTime}
                navigation={navigation}
                source={item.fullPath}
              />
            ))
          : <RecordNotFound/>}
        <View style={{ height: hp(20) }} />
      </ScrollView>
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
