import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colorsPallet";
import Checkin from "../../components/Checkin";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import Layout from "../../components/Layout";
const Home = ({ navigation }) => {
  const CheckedIn = async () => {
    const res = await Api.post(urls.ADD_ATTENDENCE);
    console.log("res", res);
    if (res && res.success == true) {
      // setData(res.data);
    } else {
    }
  };

  return (
    <Layout title={"Fabintel Team"} address>
      <View style={{ marginTop: "20%" }}>
        <Checkin onPress={() => CheckedIn()} />
      </View>
    </Layout>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
});
