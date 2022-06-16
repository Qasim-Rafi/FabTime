import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/colorsPallet";
import Checkin from "../../components/Checkin";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import Layout from "../../components/Layout";
import { globalPath } from "../../constants/globalPath";
import { wp } from "../../helpers/Responsiveness";
import ResponsiveText from "../../components/RnText";
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

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: wp(10),
          }}
        >
          <TouchableOpacity>
            <ImageBackground source={globalPath.latebutton} style={styles.btn}>
              <ResponsiveText>Late</ResponsiveText>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground source={globalPath.leavebutton} style={styles.btn}>
              <ResponsiveText>Apply Leave</ResponsiveText>
            </ImageBackground>
          </TouchableOpacity>
        </View>
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
  btn: {
    height: wp(10),
    width: wp(30),
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
