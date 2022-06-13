import React, { useEffect } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { globalPath } from "../../constants/globalPath";
import ResponsiveText from "../../components/RnText";
import { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import Fonts from "../../helpers/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <View style={styles.screeninfo}>
          <ResponsiveText
            margin={[20, 0, 0, 30]}
            fontFamily={Fonts.Bold}
            size={8}
            color={colors.white}
          >
            Fabintel
          </ResponsiveText>
          <ResponsiveText
            margin={[0, 0, 0, 30]}
            fontFamily={Fonts.Bold}
            size={3.5}
            color={colors.white}
          >
            fabintel international lahore, pakistan
          </ResponsiveText>
        </View>
        <View style={{ backgroundColor: colors.blue1, flex: 1 }}>
          <View style={styles.footer}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    // borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // alignItems: 'center'
    // marginTop:hp(0.5)
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screeninfo: {
    // flex: 0.4,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.blue1,
    borderBottomLeftRadius: 35,
    paddingBottom:10
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    // marginBottom: 20,
    alignItems: "center",
  },
});
