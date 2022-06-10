import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Responsiveness, { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { SafeAreaView } from "react-native-safe-area-context";
import { Grid } from 'react-native-animated-spinkit'
const Home = () => {
  const [loader, setLoader] = React.useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)

    }, 5000);
  });

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View>
        {loader ?
          <View style={{ justifyContent: 'center',alignItems:'center', backgroundColor: 'rgba(65, 65, 65, 1)', flex: 1 }}>
            <Grid size={48} color={colors.darkblue} />

          </View>
          : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.green,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
  },
  row: {
    flexDirection: "row", justifyContent: 'space-between'
  },
  boxText: {
    fontSize: hp(1.7),
    alignSelf: "center",
    marginTop: 5,
  },
  boxTextno: {
    fontSize: hp(2),
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
    color: colors.green,
  },
  footer: {
    flex: 1.6,
    backgroundColor: colors.white,
    paddingTop: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  middlebar: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    alignItems: "center",
    // justifyContent:'space-evenly',
    borderTopRightRadius: 25,
    paddingHorizontal: hp(1),
    alignSelf: "center",
  },
  Boxes: {
    height: hp(22),
    width: wp(40),
    backgroundColor: colors.white,
    elevation: 0.4,
    justifyContent: "center",
    borderRadius: 10,
  },

});

// rnfes
