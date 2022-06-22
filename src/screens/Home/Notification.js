import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { CardView, NotifationCard } from "../../components/cardView";

const Notification = ({navigation}) => {
  return (
    <Layout  navigation={navigation} backbutton title={"Notification"}>
      <NotifationCard />
    </Layout>
  );
};

export default Notification;

const styles = StyleSheet.create({
 
});
